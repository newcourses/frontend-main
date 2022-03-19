import qs from 'qs';
import { cmsApi } from '../../../../utils/axiosInstances';
import { ApiError } from '../../../../helpers';

const MISSING_VISITOR =
  'Ошибка! Обновите страницу! \nЕсли ошибка сохранится почитстите куки и кеш';

async function getVisitor(uid) {
  const queryVisitor = qs.stringify(
    {
      filters: {
        uid,
      },
    },
    { encodeValuesOnly: true },
  );
  const { data: visitors } = await cmsApi.get(`/visitors?${queryVisitor}`);
  return visitors?.data?.[0];
}

async function canCreateReaction({ visitor, review, comment }) {
  const queryReactions = qs.stringify(
    {
      filters: {
        visitor,
        $or: [{ review }, { comment }],
      },
    },
    { encodeValuesOnly: true },
  );

  const { data: reactions } = await cmsApi.get(`/reactions?${queryReactions}`);

  return reactions?.data?.length === 0;
}

export default async (body) => {
  const visitor = await getVisitor(body.uid);
  if (!visitor) {
    throw ApiError(MISSING_VISITOR, 409);
  }

  const isCreateReaction = await canCreateReaction({
    visitor: visitor.id,
    review: body.review,
    comment: body.comment,
  });

  if (!isCreateReaction) {
    throw ApiError('Вы уже поставили оценку', 409);
  }

  await cmsApi.post(`/reactions`, {
    data: {
      visitor: visitor.id,
      review: body.review,
      comment: body.comment,
      indicator: body.indicator,
    },
  });

  return 'ok';
};

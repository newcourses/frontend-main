import qs from 'qs';
import { ApiError } from 'helpers';
import { cmsApi } from 'utils/axiosInstances';
import { MISSING_VISITOR } from 'library/apiErrors';
import VisitorsServices from 'api/services/visitors';

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

/**
 * Creat reaction
 * @param body
 * @param {string} body.uid visitor's uid
 * @param {string} body.review review's id
 * @param {string} body.comment comment's id
 * @param {string} body.indicator reaction indicator
 * @returns {Promise<string>}
 */
export default async (body) => {
  const visitor = await VisitorsServices.getOneByUID(body.uid);
  if (!visitor) {
    throw ApiError(MISSING_VISITOR.message, MISSING_VISITOR.statusCode);
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

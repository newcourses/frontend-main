import qs from 'qs';
import { REVIEWS } from 'library/routers';
import { cmsApi } from 'utils/axiosInstances';

export default async ({ code, sort = 'date:desc', pagination }) => {
  const query = qs.stringify(
    {
      sort,
      populate: [
        'reviewer',
        'comments',
        'reactions',
        'comments.reviewer',
        'comments.reactions',
      ],
      filters: {
        school: {
          code,
        },
      },
      pagination,
    },
    { encodeValuesOnly: true },
  );

  const { data: schools } = await cmsApi.get(`${REVIEWS}?${query}`);

  return schools;
};

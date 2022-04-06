import qs from 'qs';
import { REVIEWS } from 'library/routers';
import { cmsApi } from 'utils/axiosInstances';
import { COUNT_DEFAULT_SIZE_PAGE } from 'library/constants';

export default async ({
  code,
  sort = 'date:desc',
  pagination = { pageSize: COUNT_DEFAULT_SIZE_PAGE },
}) => {
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

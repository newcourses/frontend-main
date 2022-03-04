import qs from 'qs';
import { cmsApi } from '../utils/axiosInstances';
import { COUNT_DEFAULT_SIZE_PAGE } from '../library/constants';

export default async function getSchoolReviews({
  code,
  sort = 'date:desc',
  pagination = { pageSize: COUNT_DEFAULT_SIZE_PAGE },
}) {
  const query = qs.stringify(
    {
      sort,
      populate: [
        'school',
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

  const { data } = await cmsApi.get(`/reviews?${query}`);
  return data;
}

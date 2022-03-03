import qs from 'qs';
import { cmsApi } from '../utils/axiosInstances';

export default async function getSchoolReviews({ code }) {
  const query = qs.stringify(
    {
      sort: ['date:asc'],
      populate: [
        'school',
        'reviewer',
        'comments',
        'reactions',
        'comments.reviewer',
        'comments.reactions',
      ],
      filters: {
        // id: 16851,
        school: {
          code,
        },
      },
    },
    { encodeValuesOnly: true },
  );

  const { data } = await cmsApi.get(`/reviews?${query}`);

  return data;
}

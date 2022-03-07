import qs from 'qs';
import { cmsApi } from '../utils/axiosInstances';

async function getSchools({ pagination }) {
  const query = qs.stringify(
    {
      populate: 'reviews',
      exclude: 'reviews',
      pagination,
    },
    { encodeValuesOnly: true },
  );

  const { data } = await cmsApi.get(`/schools?${query}`);

  return data;
}

export default getSchools;

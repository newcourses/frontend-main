import qs from 'qs';
import { POSTS } from 'library/routers';
import { cmsApi } from 'utils/axiosInstances';

export default async (uid) => {
  const query = qs.stringify({ filters: { uid } }, { encodeValuesOnly: true });

  const { data } = await cmsApi.get(`${POSTS}?${query}`);

  return data.data[0];
};

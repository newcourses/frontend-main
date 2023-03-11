import { cmsApi } from 'utils/axiosInstances';

export default async (url) => {
  const { data } = await cmsApi.get(url);

  return data;
};

import { cmsApi } from 'utils/axiosInstances';

export default async (url) => {
  const { data: schools } = await cmsApi.get(url);
  return schools;
};

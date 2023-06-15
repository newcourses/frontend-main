import { SUBCATEGORIES } from 'library/routers';
import { cmsApi } from 'utils/axiosInstances';

export default async (code) => {
  const { data } = await cmsApi.get(`${SUBCATEGORIES}/${code}`);

  return data;
};

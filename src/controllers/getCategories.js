import qs from 'qs';
import { cmsApi } from '../utils/axiosInstances';

export default async function getCategories() {
  const query = qs.stringify(
    { populate: ['subcategories'] },
    { encodeValuesOnly: true },
  );

  const { data } = await cmsApi.get(`/categories?${query}`);

  return data;
}

import qs from 'qs';
import { api } from '../utils/axiosInstances';

export default async function getCategories() {
  const query = qs.stringify(
    { populate: ['subcategories'] },
    { encodeValuesOnly: true },
  );

  const { data } = await api.get(`/categories?${query}`);

  return data;
}

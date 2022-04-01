import qs from 'qs';
import { CATEGORIES } from 'library/routers';
import { cmsApi } from 'utils/axiosInstances';

export default async () => {
  const query = qs.stringify(
    { populate: ['subcategories'] },
    { encodeValuesOnly: true },
  );

  const { data: categories } = await cmsApi.get(`${CATEGORIES}?${query}`);

  return categories;
};

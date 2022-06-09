import qs from 'qs';
import { PRODUCTS } from 'library/routers';
import { cmsApi } from 'utils/axiosInstances';

export default async ({ filters, populate, pagination, customFields }) => {
  const query = qs.stringify(
    {
      filters,
      populate,
      pagination,
      customFields,
    },
    { encodeValuesOnly: true },
  );

  const { data } = await cmsApi.get(`${PRODUCTS}?${query}`);

  return data;
};

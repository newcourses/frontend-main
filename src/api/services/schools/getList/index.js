import qs from 'qs';
import { SCHOOLS } from 'library/routers';
import { cmsApi } from 'utils/axiosInstances';

export default async ({
  sort,
  fields,
  filters,
  populate,
  pagination,
  customFields,
}) => {
  const query = qs.stringify(
    {
      sort,
      fields,
      filters,
      populate,
      pagination,
      customFields,
    },
    { encodeValuesOnly: true },
  );

  const { data: schools } = await cmsApi.get(`${SCHOOLS}?${query}`);

  return schools;
};

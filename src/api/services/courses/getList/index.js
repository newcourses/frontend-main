import qs from 'qs';
import { COURSES } from 'library/routers';
import { cmsApi } from 'utils/axiosInstances';

export default async ({ code, populate, pagination, customFields }) => {
  const query = qs.stringify(
    {
      customFields,
      filters: {
        subcategories: {
          code,
        },
      },
      populate,
      pagination,
    },
    { encodeValuesOnly: true },
  );

  const { data: schools } = await cmsApi.get(`${COURSES}?${query}`);

  return schools;
};

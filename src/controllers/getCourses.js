import qs from 'qs';
import { cmsApi } from 'utils/axiosInstances';

export default async function getCourses({
  pagination,
  code,
  customFields,
  populate,
}) {
  const query = qs.stringify(
    {
      customFields,
      filters: {
        subcategory: {
          code,
        },
      },
      populate,
      pagination,
    },
    { encodeValuesOnly: true },
  );

  const { data } = await cmsApi.get(`/courses?${query}`);

  return data;
}

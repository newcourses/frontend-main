import qs from 'qs';
import { cmsApi } from '../utils/axiosInstances';

async function getSchools({
  sort,
  fields,
  filters,
  populate,
  pagination,
  customFields,
}) {
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

  const { data } = await cmsApi.get(`/schools?${query}`);

  return data;
}

export default getSchools;

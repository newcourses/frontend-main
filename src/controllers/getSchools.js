import qs from 'qs';
import { cmsApi } from '../utils/axiosInstances';

async function getSchools({
  fields,
  filters,
  populate,
  pagination,
  customFields,
}) {
  const query = qs.stringify(
    {
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

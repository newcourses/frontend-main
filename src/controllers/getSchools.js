import qs from 'qs';
import { cmsApi } from '../utils/axiosInstances';
import { SCHOOLS } from '../library/routers';

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

  const { data } = await cmsApi.get(`${SCHOOLS}?${query}`);

  return data;
}

export default getSchools;

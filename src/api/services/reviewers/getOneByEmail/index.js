import { cmsApi } from 'utils/axiosInstances';
import { REVIEWERS } from 'library/routers';
import qs from 'qs';

/**
 * Get reviewer
 * @param {string} email
 * @returns {Promise<*>}
 */
export default async (email) => {
  const query = qs.stringify(
    {
      filters: {
        email,
      },
    },
    { encodeValuesOnly: true },
  );
  const { data: reviewer } = await cmsApi.get(`${REVIEWERS}/?${query}`);

  return reviewer?.data?.[0] || null;
};

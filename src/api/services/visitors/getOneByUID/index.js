import qs from 'qs';
import { cmsApi } from 'utils/axiosInstances';

/**
 * Get one visitor by uid
 * @param {string} uid
 * @returns {Promise<*|null>}
 */
export default async (uid) => {
  const queryVisitor = qs.stringify(
    {
      filters: {
        uid,
      },
    },
    { encodeValuesOnly: true },
  );
  const { data: visitors } = await cmsApi.get(`/visitors?${queryVisitor}`);

  return visitors?.data?.[0] || null;
};

import { cmsApi } from 'utils/axiosInstances';
import { MAIL_RECIPIENTS } from 'library/routers';

/**
 * Create review
 * @param body
 * @param {string} body.email Recipient's id
 * @param {string} body.visitorId Visitor's id
 * @returns {Promise<any>}
 */
export default async (body) => {
  const { data: review } = await cmsApi.post(MAIL_RECIPIENTS, {
    data: {
      email: body.email,
      visitor: body.visitorId,
    },
  });
  return review;
};

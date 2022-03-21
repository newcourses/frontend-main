import { REVIEWERS } from 'library/routers';
import { cmsApi } from 'utils/axiosInstances';

/**
 * Create reviewer
 * @param body
 * @param {string} body.visitorId Visitor's id
 * @param {string} body.name Reviewer's name
 * @param {string} body.email Reviewer's email
 * @returns {Promise<any>}
 */
export default async (body) => {
  const { data: reviewer } = await cmsApi.post(REVIEWERS, {
    data: {
      visitor: body.visitorId,
      name: body.name,
      email: body.email,
    },
  });

  return reviewer;
};

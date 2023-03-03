import { cmsApi } from 'utils/axiosInstances';
import { FEEDBACKS } from 'library/routers';

/**
 * Creat feedback
 * @param body
 * @param {string} body.email user's email
 * @param {string} body.title user's title
 * @param {string} body.text feedback's text
 * @param {number} body.visitor visitor's id
 * @returns {Promise<string>}
 */
export default async (body) => {
  const { data: comment } = await cmsApi.post(FEEDBACKS, {
    data: {
      email: body.email,
      title: body.title,
      text: body.text,
      visitor: body.visitor,
    },
  });

  return comment;
};

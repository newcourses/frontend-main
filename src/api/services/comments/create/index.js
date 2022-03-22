import { DateTime } from 'luxon';
import { cmsApi } from 'utils/axiosInstances';

/**
 * Creat reaction
 * @param body
 * @param {number} body.reviewerId reviewer's id
 * @param {number} body.reviewId review's id
 * @param {string} body.text comment's text
 * @returns {Promise<string>}
 */
export default async (body) => {
  const { data: comment } = await cmsApi.post(`/comments`, {
    data: {
      text: body.text,
      publishedAt: null,
      review: body.reviewId,
      reviewer: body.reviewerId,
      date: DateTime.now().toFormat('yyyy-MM-dd'),
    },
  });

  return comment;
};

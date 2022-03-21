import { REVIEWS } from 'library/routers';
import { cmsApi } from 'utils/axiosInstances';
import { DateTime } from 'luxon';

/**
 * Create review
 * @param body
 * @param {string} body.reviewerId Reviewer's id
 * @param {string} body.text Review's text
 * @param {string} body.title Review's title
 * @param {string} body.grade Review's grade
 * @param {string} body.schoolId School's id
 * @returns {Promise<any>}
 */
export default async (body) => {
  const { data: review } = await cmsApi.post(REVIEWS, {
    data: {
      text: body.text,
      grade: body.grade,
      title: body.title,
      publishedAt: null,
      school: body.schoolId,
      reviewer: body.reviewerId,
      date: DateTime.now().toFormat('yyyy-MM-dd'),
    },
  });

  return review;
};

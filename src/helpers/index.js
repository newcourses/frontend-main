import { declOfNumCourses } from './declOfNumInstances';

export { declOfNumReviews } from './declOfNumInstances';
export { declOfNumComments } from './declOfNumInstances';
export { parseRouters, ApiError, errorCatcher } from './api';

export const generateTitle = (countCourses, categoryCaption) => {
  return `Топ - ${declOfNumCourses(
    countCourses,
    true,
  )} по ${categoryCaption}, обучение в лучших школах`;
};

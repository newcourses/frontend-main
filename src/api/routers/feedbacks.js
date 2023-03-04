import FeedbacksControllers from 'api/controllers/feedbacks';

export default [
  {
    method: 'POST',
    path: '/api/feedbacks',
    controller: FeedbacksControllers.create,
  },
];

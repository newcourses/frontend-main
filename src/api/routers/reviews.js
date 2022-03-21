import ReviewsControllers from 'api/controllers/reviews';

export default [
  {
    method: 'POST',
    path: '/api/reviews',
    controller: ReviewsControllers.create,
  },
];

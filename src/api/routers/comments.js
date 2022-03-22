import CommentsControllers from 'api/controllers/comments';

export default [
  {
    method: 'POST',
    path: '/api/comments',
    controller: CommentsControllers.create,
  },
];

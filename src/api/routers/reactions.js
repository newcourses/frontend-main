import ReactionsControllers from 'api/controllers/reactions';

export default [
  {
    method: 'POST',
    path: '/api/reactions',
    controller: ReactionsControllers.create,
  },
];

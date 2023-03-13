import UploadsControllers from 'api/controllers/uploads';

export default [
  {
    method: 'GET',
    path: '/api/uploads/:code',
    controller: UploadsControllers.getFile,
  },
];

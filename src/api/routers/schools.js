import SchoolsControllers from 'api/controllers/schools';

export default [
  {
    method: 'GET',
    path: '/api/schools',
    controller: SchoolsControllers.getList,
  },
];

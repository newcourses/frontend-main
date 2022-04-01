import CategoriesControllers from 'api/controllers/categories';

export default [
  {
    method: 'GET',
    path: '/api/categories',
    controller: CategoriesControllers.getList,
  },
];

import ProductsControllers from 'api/controllers/products';
import { PRODUCTS } from 'library/routers';

export default [
  {
    method: 'GET',
    path: `/api${PRODUCTS}`,
    controller: ProductsControllers.getList,
  },
];

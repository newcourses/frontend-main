import ProductGetList from './getList';

class ProductController {
  static getList(query, type = 'request') {
    return ProductGetList[type](query);
  }
}

export default ProductController;

import ProductGetList from './getList';

class SchoolController {
  static getList(query, type = 'request') {
    return ProductGetList[type](query);
  }
}

export default SchoolController;

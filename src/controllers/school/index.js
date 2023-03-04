import SchoolGetList from './getList';

class SchoolController {
  static getList(query, type = 'request') {
    return SchoolGetList[type](query);
  }
}

export default SchoolController;

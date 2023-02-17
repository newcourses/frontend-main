import ProductsServices from 'api/services/products';
import BaseController from 'controllers/base';
import { POSTS } from 'library/routers';

class PostGetList extends BaseController {
  constructor() {
    super();
    this.query = {};
    this.queryParams = {};
    this.rout = POSTS;
  }

  prepareQuery() {
    this.queryParams.populate = '*';
  }

  async request(query) {
    this.query = query;
    this.prepareQuery();
    this.stringifyQuery(this.queryParams);
    return ProductsServices.getList(`${this.rout}/${this.queryString}`);
  }

  async requestFront(query) {
    this.query = query;
    this.prepareQuery();
    return super.requestFront(this.rout, this.queryParams);
  }
}

export default new PostGetList();

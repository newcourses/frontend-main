import SchoolsServices from 'api/services/schools';
import BaseController from 'controllers/base';
import { SCHOOLS } from 'library/routers';

class SchoolGetList extends BaseController {
  constructor() {
    super();
    this.query = {};
    this.queryParams = {};
    this.rout = SCHOOLS;
    this.services = SchoolsServices;
  }

  prepareQuery() {
    const { page, isFree, subcategory } = this.query;
    const productFilters = {
      product_type: { code: 'course' },
      isFree,
      subcategories: {
        code: { $eq: subcategory },
      },
    };

    this.queryParams.customFields = 'grade';
    this.queryParams.filters = {
      products: productFilters,
    };
    this.queryParams.pagination = { page };
    this.queryParams.populate = {
      advantages: '*',
      disadvantages: '*',
      products: {
        filters: productFilters,
      },
    };
  }

  async request(query) {
    this.query = query;
    this.prepareQuery();
    this.stringifyQuery(this.queryParams);
    return this.services.getList(`${this.rout}/${this.queryString}`);
  }

  async requestFront(query) {
    this.query = query;
    this.prepareQuery();
    return super.requestFront(this.rout, this.queryParams);
  }
}

export default new SchoolGetList();

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
    const {
      page,
      name,
      isFree,
      category,
      limit = 25,
      schoolCode,
      subcategory,
      displayLink,
      isPopulateQuality,
      isPopulateProducts,
    } = this.query;
    const filters = {};
    const populate = {};
    if (schoolCode) {
      filters.code = schoolCode;
    }

    if (name && displayLink) {
      filters.$or = [{ name }, { displayLink }];
    }

    const productFilters = {
      product_type: { code: 'course' },
      isFree,
    };

    if (subcategory) {
      productFilters.subcategories = { code: subcategory };
    }

    if (category) {
      if (!productFilters.subcategories) productFilters.subcategories = {};
      productFilters.subcategories.categories = { code: category };
    }

    if (isPopulateProducts) {
      filters.products = productFilters;
      populate.products = {
        filters: productFilters,
      };
      populate.subcategories = ['categories'];
    }

    if (isPopulateQuality) {
      populate.advantages = '*';
      populate.disadvantages = '*';
    }

    this.queryParams.customFields = 'grade';
    this.queryParams.filters = filters;
    this.queryParams.pagination = { page, limit };
    this.queryParams.populate = {
      ...populate,
    };
  }

  async request(query) {
    this.query = query;
    this.prepareQuery();
    this.stringifyQuery(this.queryParams);
    return this.services.getList(encodeURI(`${this.rout}/${this.queryString}`));
  }

  async requestFront(query) {
    this.query = query;
    this.prepareQuery();
    return super.requestFront(this.rout, this.queryParams);
  }
}

export default new SchoolGetList();

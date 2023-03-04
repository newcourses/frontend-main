import _isEmpty from 'lodash/isEmpty';
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
      productType,
      subcategory,
      displayLink,
      isPopulateQuality,
      isPopulateProducts,
    } = this.query;
    const filters = {
      ...(schoolCode && { code: schoolCode }),
    };
    const populate = {
      ...(isPopulateQuality && { advantages: '*' }),
      ...(isPopulateQuality && { disadvantages: '*' }),
    };

    if (name && displayLink) {
      filters.$or = [{ name }, { displayLink }];
    }

    const productFilters = {
      ...(productType && {
        product_type: { code: productType },
      }),
      ...(typeof isFree !== 'undefined' && { isFree }),
    };

    if (subcategory) {
      productFilters.subcategories = { code: subcategory };
    }

    if (category) {
      if (!productFilters.subcategories) productFilters.subcategories = {};
      productFilters.subcategories.categories = { code: category };
    }

    if (isPopulateProducts) {
      if (_isEmpty(productFilters)) {
        populate.products = '*';
      } else {
        filters.products = productFilters;
        populate.products = {
          filters: productFilters,
        };
      }

      populate.subcategories = ['categories'];
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

import ProductsServices from 'api/services/products';
import BaseController from 'controllers/base';
import { PRODUCTS } from 'library/routers';

class ProductGetList extends BaseController {
  constructor() {
    super();
    this.query = {};
    this.queryParams = {};
    this.rout = PRODUCTS;
  }

  prepareQuery() {
    const {
      price,
      title,
      isFree,
      page = 1,
      categories,
      subcategories,
      productTypeCode = 'course',
    } = this.query;
    const filters = {};

    if (price?.length === 2) {
      filters.$and = [
        {
          $or: [
            {
              price: {
                $gte: price[0],
              },
            },
            {
              oldPrice: {
                $gte: price[0],
              },
            },
          ],
        },
        {
          $or: [
            {
              price: {
                $lte: price[1],
              },
            },
            {
              oldPrice: {
                $lte: price[1],
              },
            },
          ],
        },
      ];
    }

    if (categories?.length) {
      filters.categories = {
        code: {
          $in: categories,
        },
      };
    }

    if (subcategories?.length) {
      filters.subcategories = {
        code: {
          $in: subcategories,
        },
      };
    }

    if (typeof isFree !== 'undefined') {
      filters.isFree = isFree;
    }

    if (title) {
      filters.title = { $containsi: title };
    }

    if (productTypeCode) {
      filters.product_type = {
        code: productTypeCode,
      };
    }

    this.queryParams.customFields = 'grade';
    this.queryParams.filters = filters;
    this.queryParams.pagination = { page };
    this.queryParams.populate = 'params';
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

export default new ProductGetList();

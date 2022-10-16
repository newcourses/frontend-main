import { proxyApi } from 'utils/axiosInstances';
import SearchHandler from '../../utils/SearchHandler';

class BaseController {
  constructor() {
    this.apiInstance = proxyApi;
  }

  stringifyQuery(query) {
    this.queryString = SearchHandler.stringify(query);
  }

  async requestFront(rout, query) {
    this.stringifyQuery(query);
    const { data } = await this.apiInstance(`${rout}/${this.queryString}`);
    return data;
  }
}

export default BaseController;

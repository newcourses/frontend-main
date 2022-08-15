import qs from 'qs';

class SearchHandler {
  constructor() {
    this.qs = qs;
  }

  parse(string) {
    return this.qs.parse(string, {
      ignoreQueryPrefix: true,
    });
  }

  stringify(values) {
    return this.qs.stringify(values, {
      encode: false,
      addQueryPrefix: true,
      arrayFormat: 'indices',
      skipNulls: true,
    });
  }
}

export default new SearchHandler();

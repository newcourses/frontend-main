import qs from 'qs';

function clearEmptyFields(values) {
  Object.keys(values).forEach((key) => {
    if (values[key]) {
      return;
    }
    delete values[key];
  });

  return values;
}

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
    return this.qs.stringify(clearEmptyFields(values), {
      encode: false,
      addQueryPrefix: true,
      arrayFormat: 'indices',
      skipNulls: true,
    });
  }
}

export default new SearchHandler();

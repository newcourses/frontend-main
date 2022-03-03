const fetchToJson =
  (baseUrl) =>
  ({
    url,
    body,
    method = 'GET',
    headers = {
      'Content-Type': 'application/json;charset=utf-8',
    },
  }) => {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        body: JSON.stringify(body),
        method,
        headers,
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  };

export default fetchToJson;

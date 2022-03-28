export const parseRouters = (routers, url, method) => {
  return routers.find((elem) => elem.method === method && elem.path === url);
};

export const ApiError = (message, statusCode) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  err.body = { message };
  throw err;
};

export const errorCatcher = async (req, res, handler) => {
  try {
    return await handler(req, res);
  } catch (err) {
    res
      .status(err.statusCode || err.response.status || 500)
      .json(err.body || { massage: err.message });
  }

  return undefined;
};

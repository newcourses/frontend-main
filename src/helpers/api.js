export const parseRouters = (routers, url, method) => {
  const path = url.split('?')[0];
  return routers.find((elem) => elem.method === method && elem.path === path);
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
      .status(err.statusCode || err.response?.status || 500)
      .json(err.body || { massage: err.message });
  }

  return undefined;
};

export const handler = (routers) => async (req, res) => {
  const baseRouter = parseRouters(routers, req.url, req.method);
  req.proxyUrl = req.url?.replace('/api', '');
  await errorCatcher(req, res, baseRouter.controller);
  return res;
};

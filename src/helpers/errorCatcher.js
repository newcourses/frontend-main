async function errorCatcher(req, res, handler) {
  try {
    return await handler(req, res);
  } catch (err) {
    res
      .status(err.statusCode || 500)
      .json(err.body || { massage: err.message });
  }

  return undefined;
}

export default errorCatcher;

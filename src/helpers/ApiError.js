const ApiError = (message, statusCode) => {
  const err = new Error(message);
  err.statusCode = statusCode;
  err.body = { message };
  throw err;
};

export default ApiError;

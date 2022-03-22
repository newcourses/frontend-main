import { errorCatcher, parseRouters } from 'helpers';
import Routers from 'api/routers/comments';

export default async function handler(req, res) {
  const baseRouter = parseRouters(Routers, req.url, req.method);
  await errorCatcher(req, res, baseRouter.controller);

  return res;
}

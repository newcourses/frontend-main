import { errorCatcher, parseRouters } from 'helpers';
import Routers from 'api/routers/reactions';

export default async function handler(req, res) {
  const baseRouter = parseRouters(Routers, req.url);

  await errorCatcher(req, res, baseRouter.controller);

  return res;
}

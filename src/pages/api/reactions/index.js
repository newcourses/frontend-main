import { errorCatcher } from 'helpers';
import reactionsRouters from 'api/routers/reactions';

export default async function handler(req, res) {
  const baseRouter = reactionsRouters.find(
    (elem) => elem.method === req.method && elem.path === req.url,
  );

  await errorCatcher(req, res, baseRouter.controller);

  return res;
}

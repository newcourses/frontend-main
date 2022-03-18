import reactionsRouters from '../../../api/routers/reactions';
import { errorCatcher } from '../../../helpers';

export default async function handler(req, res) {
  const baseRouter = reactionsRouters.find(
    (elem) => elem.method === req.method && elem.path === req.url,
  );

  await errorCatcher(req, res, baseRouter.controller);

  return res;
}

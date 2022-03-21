import ReactionsServices from 'api/services/reactions';
import { VISITOR_UID } from 'library/constants';
import { ApiError } from 'helpers';

export default async (req, res) => {
  const visitorUid = req.cookies[VISITOR_UID];

  if (!visitorUid) {
    throw ApiError('Отсутствует VISITOR_UID, обновите страницу', 404);
  }

  const result = await ReactionsServices.create({
    uid: visitorUid,
    ...req.body,
  });
  return res.status(201).json(result);
};

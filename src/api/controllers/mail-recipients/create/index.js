import { ApiError } from 'helpers';
import { VISITOR_UID } from 'library/constants';
import { MISSING_VISITOR } from 'library/apiErrors';
import VisitorsServices from 'api/services/visitors';
import MailRecipientsServices from 'api/services/mail-recipients';

export default async (req, res) => {
  const visitorUid = req.cookies[VISITOR_UID];
  const { body } = req;

  const visitor = await VisitorsServices.getOneByUID(visitorUid);
  if (!visitor) {
    throw ApiError(MISSING_VISITOR.message, MISSING_VISITOR.statusCode);
  }

  const result = await MailRecipientsServices.create({
    email: body.email,
    visitorId: visitor.id,
  });

  return res.status(201).json(result);
};

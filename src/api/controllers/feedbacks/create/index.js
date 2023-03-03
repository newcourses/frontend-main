import { ApiError } from 'helpers';
import { VISITOR_UID } from 'library/constants';
import { MISSING_VISITOR } from 'library/apiErrors';
import VisitorsServices from 'api/services/visitors';
import FeedbacksServices from 'api/services/feedbacks';

export default async (req, res) => {
  const { body } = req;
  const visitorUid = req.cookies[VISITOR_UID];

  const visitor = await VisitorsServices.getOneByUID(visitorUid);
  if (!visitor) {
    throw ApiError(MISSING_VISITOR.message, MISSING_VISITOR.statusCode);
  }

  const result = await FeedbacksServices.create({
    email: body.email,
    text: body.text,
    title: body.title,
    visitor: visitor.id,
  });

  return res.status(201).json(result);
};

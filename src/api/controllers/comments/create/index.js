import { ApiError } from 'helpers';
import { VISITOR_UID } from 'library/constants';
import { MISSING_VISITOR } from 'library/apiErrors';
import VisitorsServices from 'api/services/visitors';
import CommentsServices from 'api/services/comments';
import ReviewersServices from 'api/services/reviewers';

export default async (req, res) => {
  const { body } = req;
  const visitorUid = req.cookies[VISITOR_UID];

  const visitor = await VisitorsServices.getOneByUID(visitorUid);
  if (!visitor) {
    throw ApiError(MISSING_VISITOR.message, MISSING_VISITOR.statusCode);
  }

  const reviewer =
    (await ReviewersServices.getOneByEmail(body.email)) ||
    (await ReviewersServices.create({
      visitorId: visitor.id,
      name: body.name,
      email: body.email,
    }));

  const result = await CommentsServices.create({
    text: body.text,
    reviewId: body.reviewId,
    reviewerId: reviewer.data.id,
  });

  return res.status(201).json(result);
};

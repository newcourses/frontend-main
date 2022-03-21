import { ApiError } from 'helpers';
import { VISITOR_UID } from 'library/constants';
import ReviewsServices from 'api/services/reviews';
import { MISSING_VISITOR } from 'library/apiErrors';
import VisitorsServices from 'api/services/visitors';
import ReviewersServices from 'api/services/reviewers';

export default async (req, res) => {
  const visitorUid = req.cookies[VISITOR_UID];
  const { body } = req;

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

  const result = await ReviewsServices.create({
    text: body.text,
    title: body.title,
    grade: body.grade,
    schoolId: body.schoolId,
    reviewerId: reviewer.id,
  });

  return res.status(201).json(result);
};

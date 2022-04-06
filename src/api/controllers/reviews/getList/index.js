import ReviewsServices from 'api/services/reviews';

export default async (req, res) => {
  const result = await ReviewsServices.getList(req.query);
  res.json(result);
};

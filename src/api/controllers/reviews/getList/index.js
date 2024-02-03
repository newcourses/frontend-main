import qs from 'qs';
import ReviewsServices from 'api/services/reviews';

export default async (req, res) => {
  const queryString = req.url.split('?')[1];

  const parsedQuery = qs.parse(queryString, { allowDots: true });

  const result = await ReviewsServices.getList({
    pagination: parsedQuery.pagination,
    code: req.query.schoolCode,
    sort: req.query.sort,
  });
  res.json(result);
};

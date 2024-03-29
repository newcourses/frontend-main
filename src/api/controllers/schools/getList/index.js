import SchoolsServices from 'api/services/schools';

export default async (req, res) => {
  const result = await SchoolsServices.getList(req.proxyUrl);
  res.json(result);
};

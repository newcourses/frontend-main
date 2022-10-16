import ProductsServices from 'api/services/products';

export default async (req, res) => {
  const result = await ProductsServices.getList(req.proxyUrl);
  res.json(result);
};

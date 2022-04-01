import CategoriesServices from 'api/services/categories';

export default async (req, res) => {
  const result = await CategoriesServices.getList();
  res.json(result);
};

import PromoCodesServices from 'api/services/promo-codes';

export default async (req, res) => {
  const result = await PromoCodesServices.getList();
  res.json(result);
};

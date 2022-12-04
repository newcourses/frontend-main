import PromoCodesControllers from 'api/controllers/promo-codes';

export default [
  {
    method: 'GET',
    path: '/api/promo-codes',
    controller: PromoCodesControllers.getList,
  },
];

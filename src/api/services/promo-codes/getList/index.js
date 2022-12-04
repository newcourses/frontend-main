import { advcakeApi } from 'utils/axiosInstances';

export default async () => {
  const { data: promoCodes } = await advcakeApi.get('/promocodes');
  return promoCodes;
};

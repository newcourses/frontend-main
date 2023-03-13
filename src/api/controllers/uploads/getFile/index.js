import { cmsUploads } from '../../../../utils/axiosInstances';

export default async (req, res) => {
  const { data } = await cmsUploads.get(`/${req.query.code}`, {
    responseType: 'stream',
  });
  data.pipe(res);
};

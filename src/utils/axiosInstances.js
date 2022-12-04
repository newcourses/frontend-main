import axios from 'axios';
import adapter from 'axios/lib/adapters/http';

const baseURL = process.env.CMS_API;

export const cmsApi = axios.create({
  baseURL,
  adapter,
});

export const proxyApi = axios.create({
  baseURL: '/api',
});

export const advcakeApi = axios.create({
  baseURL: 'https://api.advcake.com',
  params: {
    pass: 'VlOFYhILziTUzfny',
  },
});

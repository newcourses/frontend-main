import fetchToJson from './fetchToJson';

const baseURL = process.env.CMS_API;

export const fetchCmsApi = fetchToJson(baseURL);

export const mock = () => {};

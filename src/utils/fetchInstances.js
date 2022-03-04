import fetchToJson from './fetchToJson';

const baseURL = process.env.NEXT_PUBLIC_CMS_API;

export const fetchCmsApi = fetchToJson(baseURL);

export const mock = () => {};

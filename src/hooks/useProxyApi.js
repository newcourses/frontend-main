import useHttp from './useHttp';
import { proxyApi } from '../utils/axiosInstances';

function useProxyApi() {
  return useHttp(proxyApi);
}

export default useProxyApi;

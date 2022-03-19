import { proxyApi } from 'utils/axiosInstances';
import useHttp from './useHttp';

function useProxyApi() {
  return useHttp(proxyApi);
}

export default useProxyApi;

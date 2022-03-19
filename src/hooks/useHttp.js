import { useState, useCallback } from 'react';

const useHttp = (axiosInstall) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = 'GET', params = null, data = null, headers = {}) => {
      setIsLoading(true);
      try {
        const response = await axiosInstall.request({
          url,
          params,
          method,
          data,
          headers,
        });
        const { data: responseData } = response;
        return responseData;
      } catch (e) {
        setError(e.response?.data?.message || e.message);
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [axiosInstall],
  );

  const clearError = useCallback(() => setError(null), []);

  return {
    isLoading,
    request,
    error,
    clearError,
  };
};

export default useHttp;

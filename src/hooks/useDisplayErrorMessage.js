import { message } from 'antd';
import { useEffect } from 'react';

const useDisplayErrorMessage = (error, clearError) => {
  useEffect(() => {
    if (error) {
      message.error(error);
      clearError();
    }
  }, [error, clearError]);
};

export default useDisplayErrorMessage;

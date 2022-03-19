import { useEffect } from 'react';
import { message } from 'antd';

const useDisplayErrorMessage = (error, clearError) => {
  useEffect(() => {
    if (error) {
      message.error(error);
      clearError();
    }
  }, [error, clearError]);
};

export default useDisplayErrorMessage;

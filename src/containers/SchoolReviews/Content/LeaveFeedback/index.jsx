import React from 'react';
import useProxyApi from 'hooks/useProxyApi';
import useDisplayErrorMessage from 'hooks/useDisplayErrorMessage';
import css from './index.module.scss';
import FeedbackForm from './FeedbackForm';

function LeaveFeedback({ schoolName, schoolId }) {
  const { request, error, clearError, isLoading, isSent } = useProxyApi();
  useDisplayErrorMessage(error, clearError);

  return (
    <div id="review" className={css.wrapper}>
      <div className={css.title}>
        {isSent ? 'Отзыв отправлен' : 'Оставить отзыв'}
      </div>
      <p className={css.description}>
        {isSent
          ? 'Спасибо! Ваш отзыв находится на модерации.'
          : `В данном разделе вы можете оставить ваш отзыв о компании ${schoolName}`}
      </p>
      {isSent || (
        <FeedbackForm
          request={request}
          schoolId={schoolId}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}

export default React.memo(LeaveFeedback);

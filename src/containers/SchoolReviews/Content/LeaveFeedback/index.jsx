import React, { useState } from 'react';
import css from './index.module.scss';
import FeedbackForm from './FeedbackForm';

function LeaveFeedback({ schoolName, schoolId }) {
  const [formSent, setFormSent] = useState(false);

  return (
    <div id="review" className={css.wrapper}>
      <div className={css.title}>
        {formSent ? 'Отзыв отправлен' : 'Оставить отзыв'}
      </div>
      <p className={css.description}>
        {formSent
          ? 'Спасибо! Ваш отзыв находится на модерации.'
          : `В данном разделе вы можете оставить ваш отзыв о компании ${schoolName}`}
      </p>
      {formSent || (
        <FeedbackForm setFormSent={setFormSent} schoolId={schoolId} />
      )}
    </div>
  );
}

export default React.memo(LeaveFeedback);

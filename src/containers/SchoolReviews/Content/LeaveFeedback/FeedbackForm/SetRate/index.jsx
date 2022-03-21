import React from 'react';
import { Rate } from 'components/CustomFields';
import css from './index.module.scss';

function SetRate(props) {
  return (
    <p>
      <Rate {...props} />
      <span className={css.text}>Поставьте вашу оценку.</span>
    </p>
  );
}

export default React.memo(SetRate);

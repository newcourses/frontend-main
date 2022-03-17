import React from 'react';
import css from './index.module.scss';
import { declOfNumMonths } from '../../../helpers/declOfNumInstances';

function Duration({ duration, unit }) {
  let actualDuration;

  switch (unit) {
    case 'month':
      actualDuration = declOfNumMonths(duration, true);
      break;
    default:
      actualDuration = duration;
      break;
  }

  return (
    <div className={css.textCell}>{actualDuration || 'Уточняйте на сайте'}</div>
  );
}

export default React.memo(Duration);

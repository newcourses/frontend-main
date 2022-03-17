import React from 'react';
import css from './index.module.scss';

function LocalPrice({ value, currency, location }) {
  return (
    <div className={css.textCell}>
      {value > 0
        ? value.toLocaleString(location, {
            style: 'currency',
            currency,
          })
        : 'Уточняйте на сайте'}
    </div>
  );
}

export default React.memo(LocalPrice);

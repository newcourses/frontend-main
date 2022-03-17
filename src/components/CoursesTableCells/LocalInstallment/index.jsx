import React from 'react';
import css from './index.module.scss';

function LocalInstallment({ value, currency, location }) {
  return (
    <div className={css.textCell}>
      {value
        ? `от ${value.toLocaleString(location, {
            style: 'currency',
            currency,
          })}`
        : 'Рассрочки нет'}
    </div>
  );
}

export default React.memo(LocalInstallment);

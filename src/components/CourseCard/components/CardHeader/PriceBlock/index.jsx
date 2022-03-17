import React from 'react';
import css from './index.module.scss';

function PriceBlock({ type, price }) {
  let prefix = 'р/курс';
  let value = price;

  if (type === 'installment') {
    const hasInstallment = price > 0;
    value = hasInstallment ? `от ${price}` : 'Рассрочки нет';
    prefix = hasInstallment && 'р/мес';
  }

  return (
    <p>
      {value ? (
        <>
          <span className={css.value}>{value}</span>
          {prefix}
        </>
      ) : (
        <span className={css.value}>Уточняйте на сайте</span>
      )}
    </p>
  );
}

export default React.memo(PriceBlock);

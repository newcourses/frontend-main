import React from 'react';
import PropTypes from 'prop-types';
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
      <span className={css.value}>{value}</span>
      {prefix}
    </p>
  );
}

PriceBlock.propTypes = {
  type: PropTypes.oneOf(['total', 'installment']).isRequired,
  price: PropTypes.number.isRequired,
};

export default React.memo(PriceBlock);

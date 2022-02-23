import React from 'react';
import PropTypes from 'prop-types';
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

LocalInstallment.propTypes = {
  location: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
LocalInstallment.defaultProps = {};

export default React.memo(LocalInstallment);

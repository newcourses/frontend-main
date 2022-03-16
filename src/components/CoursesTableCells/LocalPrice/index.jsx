import React from 'react';
import PropTypes from 'prop-types';
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

LocalPrice.propTypes = {
  location: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  value: PropTypes.number,
};
LocalPrice.defaultProps = {
  value: 0,
};

export default React.memo(LocalPrice);

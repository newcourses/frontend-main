import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

function LocalPrice({ value, currency, location }) {
  return (
    <div className={css.textCell}>
      {value.toLocaleString(location, {
        style: 'currency',
        currency,
      })}
    </div>
  );
}

LocalPrice.propTypes = {
  location: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
LocalPrice.defaultProps = {};

export default React.memo(LocalPrice);

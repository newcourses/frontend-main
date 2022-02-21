import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import css from './index.module.scss';

function CustomRate({ rating }) {
  let color;

  if (rating >= 4) {
    color = 'green';
  } else if (rating < 4 && rating > 2.5) {
    color = '#fadb14;';
  } else if (rating < 2.5) {
    color = 'red';
  }
  return (
    <div className={css.wrapperRating}>
      <div className={css.ratingCount} style={{ color }}>
        {rating}
      </div>
      <Rate allowHalf disabled defaultValue={rating} style={{ color }} />
    </div>
  );
}

CustomRate.propTypes = {
  rating: PropTypes.number.isRequired,
};
CustomRate.defaultProps = {};

export default React.memo(CustomRate);

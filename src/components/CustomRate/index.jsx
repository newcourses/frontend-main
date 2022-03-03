import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import cn from 'classnames';
import css from './index.module.scss';

function CustomRate({ rating, wrapperStyle }) {
  let color;

  if (rating >= 4) {
    color = 'green';
  } else if (rating < 4 && rating > 2.5) {
    color = '#fadb14;';
  } else if (rating < 2.5) {
    color = 'red';
  }
  return (
    <div className={cn(css.wrapperRating, wrapperStyle)}>
      <div className={css.ratingCount} style={{ color }}>
        {rating}
      </div>
      <Rate allowHalf disabled defaultValue={rating} style={{ color }} />
    </div>
  );
}

CustomRate.propTypes = {
  rating: PropTypes.number.isRequired,
  wrapperStyle: PropTypes.string,
};
CustomRate.defaultProps = {
  wrapperStyle: null,
};

export default React.memo(CustomRate);

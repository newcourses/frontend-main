import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import cn from 'classnames';
import css from './index.module.scss';

function CustomRate({ grade, wrapperStyle }) {
  let color;

  if (grade >= 4) {
    color = 'green';
  } else if (grade < 4 && grade > 2.5) {
    color = '#fadb14;';
  } else if (grade < 2.5) {
    color = 'red';
  }
  return (
    <div className={cn(css.wrapperRating, wrapperStyle)}>
      <div className={css.ratingCount} style={{ color }}>
        {grade}
      </div>
      <Rate allowHalf disabled defaultValue={grade} style={{ color }} />
    </div>
  );
}

CustomRate.propTypes = {
  grade: PropTypes.number.isRequired,
  wrapperStyle: PropTypes.string,
};
CustomRate.defaultProps = {
  wrapperStyle: null,
};

export default React.memo(CustomRate);

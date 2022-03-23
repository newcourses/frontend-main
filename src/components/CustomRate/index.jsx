import React from 'react';
import { Rate } from 'antd';
import cn from 'classnames';
import css from './index.module.scss';

function CustomRate({ grade, wrapperStyle, size = 20, hiddenGrade }) {
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
      {hiddenGrade || (
        <div className={css.ratingCount} style={{ color, fontSize: size }}>
          {grade}
        </div>
      )}
      <Rate
        allowHalf
        disabled
        defaultValue={grade}
        style={{ color, fontSize: size, display: 'flex' }}
      />
    </div>
  );
}

export default React.memo(CustomRate);

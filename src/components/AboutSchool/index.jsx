import React from 'react';
import { Rate } from 'antd';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './index.module.scss';
import { declOfNumReviews } from '../../helpers';
import { ISchoolInfo } from '../../propTypes';

function AboutSchool({
  link,
  name,
  value,
  rating,
  countReviews,
  wrapperStyles,
}) {
  let color;

  if (rating >= 4) {
    color = 'green';
  } else if (rating < 4 && rating > 2.5) {
    color = '#fadb14;';
  } else if (rating < 2.5) {
    color = 'red';
  }
  return (
    <div className={cn(css.aboutSchool, wrapperStyles)}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
      <div className={css.wrapperRating}>
        <div className={css.ratingCount} style={{ color }}>
          {rating}
        </div>
        <Rate allowHalf disabled defaultValue={rating} style={{ color }} />
      </div>
      <a className={css.reviews} href={`/${value}`}>
        {declOfNumReviews(countReviews, true)} о школе
      </a>
    </div>
  );
}

AboutSchool.propTypes = {
  ...ISchoolInfo.isRequired,
  wrapperStyles: PropTypes.string,
};

AboutSchool.defaultProps = {
  wrapperStyles: '',
};

export default React.memo(AboutSchool);

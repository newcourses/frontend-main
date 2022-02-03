import React from 'react';
import PropTypes from 'prop-types';
import { Rate } from 'antd';
import css from './AboutSchool.module.scss';

function AboutSchool({ link, name, rating, reviewsLink }) {
  return (
    <div className={css.aboutSchool}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
      <div className={css.wrapperRating}>
        <div className={css.ratingCount}>{rating}</div>
        <Rate allowHalf disabled defaultValue={rating} />
      </div>
      <a href={reviewsLink}>отзывы о школе</a>
    </div>
  );
}

AboutSchool.propTypes = {
  reviewsLink: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(AboutSchool);

import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import { ICourseCard } from '../../propTypes';
import CourseCard from '../../components/CourseCard';

function ShowcaseCourses({ cards, title }) {
  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <div className={css.wrapperList}>
        {cards.map((card) => (
          <CourseCard {...card} />
        ))}
      </div>
    </div>
  );
}

ShowcaseCourses.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(ICourseCard),
};
ShowcaseCourses.defaultProps = {
  cards: [],
};

export default React.memo(ShowcaseCourses);

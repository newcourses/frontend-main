import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import CourseCard from '../../components/CourseCard';
import { ICourseData } from '../../propTypes';

function ShowcaseCourses({ cards, title }) {
  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <div className={css.wrapperList}>
        {cards.map(({ id, attributes }) => (
          <CourseCard key={id} {...attributes} />
        ))}
      </div>
    </div>
  );
}

ShowcaseCourses.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(ICourseData),
};
ShowcaseCourses.defaultProps = {
  cards: [],
};

export default React.memo(ShowcaseCourses);

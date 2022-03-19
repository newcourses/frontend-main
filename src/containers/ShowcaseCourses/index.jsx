import React from 'react';
import CourseCard from 'components/CourseCard';
import css from './index.module.scss';

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

export default React.memo(ShowcaseCourses);

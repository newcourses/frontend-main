import React from 'react';
import css from './index.module.scss';
import InfoSchoolAndCourses from '../InfoSchoolAndCourses';

function SchoolsInfo({ schools, title, description }) {
  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <div className={css.description}>{description}</div>
      {schools.map(({ id, attributes }) => (
        <InfoSchoolAndCourses key={id} {...attributes} />
      ))}
    </div>
  );
}

export default React.memo(SchoolsInfo);

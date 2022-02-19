import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import InfoSchoolAndCourses from '../InfoSchoolAndCourses';

function SchoolsInfo({ schools, title, description }) {
  return (
    <div>
      <h3 className={css.title}>{title}</h3>
      <div className={css.description}>{description}</div>
      {schools.map((elem) => (
        <InfoSchoolAndCourses {...elem} />
      ))}
    </div>
  );
}

SchoolsInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  schools: [],
};
SchoolsInfo.defaultProps = {
  schools: [],
};

export default React.memo(SchoolsInfo);

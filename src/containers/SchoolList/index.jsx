import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import SchoolCard from '../../components/SchoolCard';
import { ISchoolData } from '../../propTypes';

function SchoolList({ data }) {
  return (
    <div>
      <h1 className={css.title}>Отзывы об онлайн-школах</h1>
      {data.map(({ id, attributes }) => (
        <SchoolCard key={id} {...attributes} />
      ))}
    </div>
  );
}

SchoolList.propTypes = {
  data: PropTypes.arrayOf(ISchoolData),
};
SchoolList.defaultProps = {
  data: [],
};

export default React.memo(SchoolList);

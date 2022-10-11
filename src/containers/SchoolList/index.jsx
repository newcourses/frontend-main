import React from 'react';
import SchoolCard from 'components/SchoolCard';
import css from './index.module.scss';
import Filters from './Filters';

function SchoolList({ data }) {
  return (
    <div>
      <h1 className={css.title}>Отзывы об онлайн-школах</h1>
      <Filters />
      {data.map(({ id, attributes }) => (
        <SchoolCard key={id} {...attributes} />
      ))}
    </div>
  );
}

export default React.memo(SchoolList);

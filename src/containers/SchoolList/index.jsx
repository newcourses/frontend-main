import React from 'react';
import css from './index.module.scss';
import SchoolCard from '../../components/SchoolCard';

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

export default React.memo(SchoolList);

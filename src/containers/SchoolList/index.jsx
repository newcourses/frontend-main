import React from 'react';
import SchoolCard from 'components/SchoolCard';
import SubscribeNewsletter from 'components/SubscribeNewsletter';
import css from './index.module.scss';
import Filters from './Filters';

function SchoolList({ data }) {
  return (
    <div>
      {data.length ? (
        <h1 className={css.title}>Отзывы об онлайн-школах</h1>
      ) : (
        <>
          <span className={css.title}>
            К сожалению мы пока ничего не нашли :(
          </span>
          <SubscribeNewsletter />
        </>
      )}
      <Filters />
      {data.map(({ id, attributes }) => (
        <SchoolCard key={id} {...attributes} />
      ))}
    </div>
  );
}

export default React.memo(SchoolList);

import React from 'react';
import css from './index.module.scss';

function Mission() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        <span className={css.highlight}>Наша миссия — </span>помогать людям
        достигать карьеры своей мечты
      </h1>
    </div>
  );
}

export default React.memo(Mission);

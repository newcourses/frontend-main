import React from 'react';
import css from './index.module.scss';

function SchoolInfo({ mainLink, displayLink, description }) {
  return (
    <>
      <p className={css.title}>
        <span>Сайт школы: </span>
        <a
          className={css.link}
          target="_blank"
          rel="noopener noreferrer"
          href={mainLink}
        >
          {displayLink}
        </a>
      </p>
      <p className={css.description}>{description}</p>
    </>
  );
}

export default React.memo(SchoolInfo);

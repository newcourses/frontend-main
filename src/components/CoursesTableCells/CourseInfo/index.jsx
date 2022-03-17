import React from 'react';
import css from './index.module.scss';

export function CourseInfo({ title, link }) {
  return (
    <div className={css.wrapper}>
      <span className={css.title}>{title}</span>
      <a
        className={css.link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ссылка на курс
      </a>
    </div>
  );
}

export default React.memo(CourseInfo);

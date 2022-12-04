import React from 'react';
import css from './index.module.scss';

function ActionButton({ name, link }) {
  return (
    <a
      className={css.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={css.mame}>промокод от: {name}</span>
    </a>
  );
}

export default React.memo(ActionButton);

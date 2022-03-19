import React from 'react';
import css from './index.module.scss';

function Title({ title, text }) {
  return (
    <div>
      <h2>{title}</h2>
      <p className={css.text}>{text}</p>
    </div>
  );
}

export default React.memo(Title);

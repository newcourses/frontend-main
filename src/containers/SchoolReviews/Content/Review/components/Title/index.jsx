import React from 'react';
import css from './index.module.scss';

function Title({ title, text }) {
  return (
    <div>
      <h2 itemProp="name">{title}</h2>
      <p itemProp="reviewBody" className={css.text}>
        {text}
      </p>
    </div>
  );
}

export default React.memo(Title);

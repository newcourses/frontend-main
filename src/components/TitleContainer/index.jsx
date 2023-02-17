import React from 'react';
import css from './index.module.scss';

function TitleContainer({ text }) {
  return <h1 className={css.title}>{text}</h1>;
}

export default React.memo(TitleContainer);

import React from 'react';
import css from './index.module.scss';

function Title({ text }) {
  return <h3 className={css.title}>{text}</h3>;
}

export default Title;

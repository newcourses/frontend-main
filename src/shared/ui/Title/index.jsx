import React from 'react';
import css from './index.module.scss';

function Title({ text }) {
  return <h1 className={css.title}>{text}</h1>;
}

export default Title;

import React from 'react';
import cn from 'classnames';
import css from './index.module.scss';

function Footer({ description }) {
  return <div className={cn(css.wrapper, css.text)}>{description}</div>;
}

export default React.memo(Footer);

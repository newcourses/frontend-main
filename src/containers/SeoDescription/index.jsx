import React from 'react';
import css from './index.module.scss';

function SeoDescription({ children }) {
  return <div className={css.seoDescription}>{children}</div>;
}

export default SeoDescription;

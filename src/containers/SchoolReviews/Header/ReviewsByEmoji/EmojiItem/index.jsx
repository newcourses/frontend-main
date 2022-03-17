import React from 'react';
import css from './index.module.scss';

function EmojiItem({ src, type, count }) {
  return (
    <div className={css.wrapper}>
      <img className={css.image} alt={type} src={src} />
      <div className={css.count}>{count}</div>
    </div>
  );
}

export default React.memo(EmojiItem);

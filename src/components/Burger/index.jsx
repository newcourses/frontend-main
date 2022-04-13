import React from 'react';
import css from './index.module.scss';

function Burger({ handler }) {
  return (
    <div onClick={handler} className={css.burger} role="button" tabIndex="0">
      <span />
      <span />
      <span />
    </div>
  );
}

export default React.memo(Burger);

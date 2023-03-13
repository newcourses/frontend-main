import React from 'react';
import { Button } from 'antd';
import NAVIGATION from 'library/navigation';
import css from './index.module.scss';

function Footer({ description, code }) {
  return (
    <div className={css.container}>
      <div className={css.text}>{description}</div>

      <Button
        className={css.button}
        type="primary"
        href={NAVIGATION.schoolData.as(code)}
      >
        {NAVIGATION.schoolData.caption}
      </Button>
    </div>
  );
}

export default React.memo(Footer);

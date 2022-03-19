import React from 'react';
import { Button } from 'antd';
import Logo from 'components/Logo';
import { declOfNumReviews } from 'helpers';
import NAVIGATION from 'library/navigation';
import CustomRate from 'components/CustomRate';
import css from './index.module.scss';

function Header({ logo, grade, mainLink, displayLink, code, countReviews }) {
  return (
    <div className={css.wrapper}>
      <div className={css.item}>
        <Logo logo={logo} isNewWind />
        <a
          className={css.link}
          href={`https://${mainLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {displayLink}
        </a>
      </div>
      <div className={css.item}>
        <CustomRate grade={grade} />
        <Button
          className={css.button}
          type="primary"
          href={NAVIGATION.schoolReview.as(code)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {declOfNumReviews(countReviews, true)}
        </Button>
      </div>
    </div>
  );
}

export default React.memo(Header);

import React from 'react';
import Link from 'next/link';
import css from './index.module.scss';
import NAVIGATION from '../../library/navigation';

function Logo({ logo, classNames, isNewWind }) {
  const linkProps = {};

  if (isNewWind) {
    linkProps.target = '_blank';
    linkProps.rel = 'noopener noreferrer';
  }

  return (
    <Link href={NAVIGATION.home.link} passHref>
      <a className={classNames} {...linkProps}>
        <img className={css.logo} src={logo.src} alt="logo" />
      </a>
    </Link>
  );
}

export default React.memo(Logo);

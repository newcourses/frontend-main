import React from 'react';
import Link from 'next/link';
import css from './Logo.module.scss';
import NAVIGATION from '../../library/navigation';

function Logo() {
  return (
    <Link href={NAVIGATION.home} passHref>
      <a>
        <img
          className={css.logo}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/1200px-Coca-Cola_logo.svg.png"
          alt="LOGO"
        />
      </a>
    </Link>
  );
}

Logo.propTypes = {};

export default React.memo(Logo);

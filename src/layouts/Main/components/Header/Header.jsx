import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import css from './Header.module.scss';
import Logo from '../../../../components/Logo/Logo';
import OvalButton from '../../../../components/OvalButton/OvalButton';

function Header() {
  return (
    <header className={css.container}>
      <Logo />
      <nav className={css.nav}>
        <OvalButton classNames={[css.link]}>
          Все категории курсов
          <DownOutlined style={{ marginLeft: '1rem' }} />
        </OvalButton>
        <ul className={css.linksWrapper}>
          <li>
            <Link href="/">
              <a className={css.link}>Some link</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a className={css.link}>Some link</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a className={css.link}>Some link</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default React.memo(Header);

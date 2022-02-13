import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Button } from 'antd';
import cn from 'classnames';
import css from './Header.module.scss';
import Logo from '../../../../components/Logo/Logo';

function Header() {
  return (
    <header className={css.container}>
      <Logo />
      <nav className={css.nav}>
        <Button type="primary" size="large" style={{ height: '4rem' }}>
          <span className={css.textButton}>
            Все категории курсов
            <DownOutlined style={{ marginLeft: '1rem' }} />
          </span>
        </Button>
        <ul className={css.linksContainer}>
          <li>
            <Link href="/">
              <a className={cn(css.linkWrapper, css.link)}>Some link</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a className={cn(css.linkWrapper, css.link)}>Some link</a>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <a className={cn(css.linkWrapper, css.link)}>Some link</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {};

export default React.memo(Header);

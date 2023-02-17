import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Logo from 'components/Logo';
import NAVIGATION from 'library/navigation';
import logoLight from 'assets/images/logo-light.png';
import css from './index.module.scss';

function Footer({ wrapperStyles }) {
  return (
    <footer style={{ backgroundColor: '#333', ...wrapperStyles }}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <Logo logo={logoLight} classNames={css.logo} />
          <nav>
            <ul className={cn(css.linksWrapper, css.wrapper)}>
              <li>
                <Link href={NAVIGATION.about.link} passHref>
                  <a className={css.link}>{NAVIGATION.about.caption}</a>
                </Link>
              </li>
              <li>
                <Link href={NAVIGATION.contacts.link} passHref>
                  <a className={css.link}>{NAVIGATION.contacts.caption}</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);

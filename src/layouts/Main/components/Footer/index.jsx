import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import Logo from 'components/Logo';
import NAVIGATION from 'library/navigation';
import logoLight from 'assets/images/logo-light.png';
import css from './index.module.scss';

const footerNav = ['about', 'contacts'];

function Footer({ wrapperStyles }) {
  return (
    <footer style={{ backgroundColor: '#333', ...wrapperStyles }}>
      <div className={css.container}>
        <Logo logo={logoLight} classNames={css.logo} />
        <nav>
          <ul className={cn(css.linksWrapper)}>
            {footerNav.map((elem) => (
              <li>
                <Link href={NAVIGATION[elem].link} passHref>
                  <a className={css.link}>{NAVIGATION[elem].caption}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default React.memo(Footer);

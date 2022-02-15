import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import css from './Footer.module.scss';
import NAVIGATION from '../../../../library/navigation';
import Logo from '../../../../components/Logo/Logo';
import { DOCUMENTATION } from '../../../../library/companyData';
import logoLight from '../../../../assets/images/logo-light.png';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#333' }}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <Logo logo={logoLight} />
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
        <div className={css.docWrapper}>
          <a
            href={DOCUMENTATION.privacyPolicy.link}
            target="_blank"
            rel="noopener noreferrer"
            className={css.documentation}
          >
            {DOCUMENTATION.privacyPolicy.caption}
          </a>
          <a
            href={DOCUMENTATION.termsOfUse.link}
            target="_blank"
            rel="noopener noreferrer"
            className={css.documentation}
          >
            {DOCUMENTATION.termsOfUse.caption}
          </a>
          <a
            href={DOCUMENTATION.cookiePolicy.link}
            target="_blank"
            rel="noopener noreferrer"
            className={css.documentation}
          >
            {DOCUMENTATION.cookiePolicy.caption}
          </a>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default React.memo(Footer);

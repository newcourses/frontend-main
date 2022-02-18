import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import css from './Logo.module.scss';
import NAVIGATION from '../../library/navigation';

function Logo({ logo, classNames }) {
  return (
    <Link href={NAVIGATION.home.link} passHref>
      <a className={classNames}>
        <img className={css.logo} src={logo.src} alt="logo" />
      </a>
    </Link>
  );
}

Logo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  logo: PropTypes.object.isRequired,
  classNames: PropTypes.string,
};
Logo.defaultProps = {
  classNames: '',
};

export default React.memo(Logo);

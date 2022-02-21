import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
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

Logo.propTypes = {
  logo: PropTypes.shape({
    blurDataURL: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    src: PropTypes.string.isRequired,
  }),
  classNames: PropTypes.string,
  isNewWind: PropTypes.bool,
};
Logo.defaultProps = {
  classNames: '',
  isNewWind: false,
  logo: {},
};

export default React.memo(Logo);

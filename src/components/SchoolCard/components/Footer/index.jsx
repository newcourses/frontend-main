import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './index.module.scss';

function Footer({ description }) {
  return <div className={cn(css.wrapper, css.text)}>{description}</div>;
}

Footer.propTypes = {
  description: PropTypes.string,
};
Footer.defaultProps = {
  description: '',
};

export default React.memo(Footer);

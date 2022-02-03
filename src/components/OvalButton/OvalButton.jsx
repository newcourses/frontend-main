import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import css from './OvalButton.module.scss';

function OvalButton({ handler, children, classNames, type }) {
  return (
    <button
      type={type}
      className={cn(css.button, ...classNames)}
      onClick={handler}
    >
      {children}
    </button>
  );
}

OvalButton.propTypes = {
  handler: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  classNames: PropTypes.arrayOf(PropTypes.string),
};

OvalButton.defaultProps = {
  classNames: [],
  type: 'button',
};

export default React.memo(OvalButton);

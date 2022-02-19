import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

function ActionButton({ name, link }) {
  return (
    <a
      className={css.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={css.mame}>курс на: {name}</span>
    </a>
  );
}

ActionButton.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default React.memo(ActionButton);

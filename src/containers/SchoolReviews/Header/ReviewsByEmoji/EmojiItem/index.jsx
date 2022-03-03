import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

function EmojiItem({ src, type, count }) {
  return (
    <div className={css.wrapper}>
      <img className={css.image} alt={type} src={src} />
      <div className={css.count}>{count}</div>
    </div>
  );
}

EmojiItem.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
EmojiItem.defaultProps = {};

export default React.memo(EmojiItem);

import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

function ContentItem({ icon, infoText, prefixText }) {
  const Icon = icon;
  return (
    <div className={css.item}>
      <div>
        <Icon className={css.icon} />
      </div>
      <span>
        <b>{prefixText} </b> {infoText}
      </span>
    </div>
  );
}

ContentItem.propTypes = {
  icon: PropTypes.element.isRequired,
  infoText: PropTypes.string.isRequired,
  prefixText: PropTypes.string.isRequired,
};

export default React.memo(ContentItem);

import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';

function parseParamsValue(value, unit) {
  if (value === 'True') {
    return 'есть';
  }
  if (value === 'False') {
    return 'нет';
  }
  return `${value} ${unit}`;
}

function ContentItem({ icon, infoText, params, prefixText }) {
  const Icon = icon;
  return (
    <div className={css.item}>
      <div>
        <Icon className={css.icon} />
      </div>
      <span>
        <b>{prefixText} </b>
        {infoText || (
          <>
            <br />
            {params.map((param) => (
              <div>
                {param.name}: {parseParamsValue(param.value, param.unit)}
              </div>
            ))}
          </>
        )}
      </span>
    </div>
  );
}

ContentItem.propTypes = {
  icon: PropTypes.element.isRequired,
  infoText: PropTypes.string.isRequired,
  prefixText: PropTypes.string.isRequired,
  params: PropTypes.arrayOf({
    name: PropTypes.string,
    value: PropTypes.string,
    unit: PropTypes.string,
  }),
};

ContentItem.defaultProps = {
  params: [],
};

export default React.memo(ContentItem);

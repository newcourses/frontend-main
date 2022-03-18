import React from 'react';
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

function ContentItem({ icon, infoText, params = [], prefixText }) {
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
              <div key={param.name}>
                {param.name}: {parseParamsValue(param.value, param.unit)}
              </div>
            ))}
          </>
        )}
      </span>
    </div>
  );
}

export default React.memo(ContentItem);

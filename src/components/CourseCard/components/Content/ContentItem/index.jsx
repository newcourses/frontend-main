import React from 'react';
import css from './index.module.scss';

function parseParamsValue(value, unit) {
  if (value === 'True') {
    return 'есть';
  }
  if (value === 'False') {
    return 'нет';
  }
  console.log('unit', unit);
  return `${value} ${unit && unit}`;
}

function ContentItem({ icon, infoText, params = [], prefixText }) {
  const Icon = icon;
  return (
    <>
      {(params.length > 0 || infoText) && (
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
      )}
    </>
  );
}

export default React.memo(ContentItem);

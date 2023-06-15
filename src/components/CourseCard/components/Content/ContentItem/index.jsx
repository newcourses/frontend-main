import React from 'react';
import css from './index.module.scss';

function parseParamsValue(value, unit) {
  if (['True', 'true', true].includes(value)) {
    return 'есть';
  }
  if (['False', 'false', false].includes(value)) {
    return 'нет';
  }

  if (unit) {
    value += ` ${unit}`;
  }

  return value;
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

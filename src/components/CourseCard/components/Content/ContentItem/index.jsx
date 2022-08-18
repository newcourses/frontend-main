import React from 'react';
import css from './index.module.scss';

function parseParamsValue(value, unit) {
  if (value === 'True') {
    return 'есть';
  }
  if (value === 'False') {
    return 'нет';
  }

  let result = value;
  if (unit) {
    result += ` ${unit}`;
  }

  return result;
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

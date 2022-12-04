import React, { useState } from 'react';
import Link from 'next/link';
import css from './index.module.scss';

function Content({ title, description, landingUrl }) {
  const [isOpenCode, setIsOpenCode] = useState(false);
  return (
    <div className={css.wrapper}>
      <h1>
        {isOpenCode ? (
          title
        ) : (
          <div role="button" tabIndex="0" onClick={() => setIsOpenCode(true)}>
            <Link href={landingUrl} target="_blank" rel="noopener noreferrer">
              <a target="_blank" rel="noopener noreferrer">
                Открыть промокод
              </a>
            </Link>
          </div>
        )}
      </h1>
      <div>{description}</div>
    </div>
  );
}

export default React.memo(Content);

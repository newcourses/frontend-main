import React, { useState } from 'react';
import { Affix, Button } from 'antd';
import css from './index.module.scss';

function AffixBlock() {
  const [top, setTop] = useState(40);

  return (
    <Affix offsetTop={top}>
      <div className={css.affixBlock}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </div>
    </Affix>
  );
}

export default React.memo(AffixBlock);

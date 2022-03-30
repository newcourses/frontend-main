import React from 'react';
import cn from 'classnames';
import { BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import css from './index.module.scss';

function BackTopButton() {
  return (
    <div className={css.wrapper}>
      <BackTop>
        <div className={cn(css.button, css.backTop)}>
          <VerticalAlignTopOutlined className={css.backTopIcon} />
        </div>
      </BackTop>
    </div>
  );
}

export default React.memo(BackTopButton);

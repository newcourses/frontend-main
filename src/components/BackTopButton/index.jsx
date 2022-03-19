import React from 'react';
import cn from 'classnames';
import { BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import css from './index.module.scss';

function BackTopButton() {
  return (
    <BackTop>
      <div className={cn(css.button, css.backTop)}>
        <VerticalAlignTopOutlined className={css.backTopIcon} />
      </div>
    </BackTop>
  );
}

export default React.memo(BackTopButton);

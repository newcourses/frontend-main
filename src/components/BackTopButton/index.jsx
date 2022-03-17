import React from 'react';
import { BackTop } from 'antd';
import cn from 'classnames';
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

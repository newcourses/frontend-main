import React from 'react';
import cn from 'classnames';
import { DownOutlined } from '@ant-design/icons';
import CustomButton from 'components/CustomButton';
import css from './index.module.scss';

function AllCategoriesButton({
  setVisibleDrawer,
  width,
  height,
  styleTextButton,
  classNames,
}) {
  return (
    <CustomButton
      onClick={() => setVisibleDrawer(true)}
      type="primary"
      size="large"
      className={cn(css.button, classNames)}
      style={{ width, height }}
    >
      <span className={styleTextButton} style={{ display: 'block' }}>
        Все категории курсов
        <DownOutlined style={{ marginLeft: '10px' }} />
      </span>
    </CustomButton>
  );
}

export default React.memo(AllCategoriesButton);

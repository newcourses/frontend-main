import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import CustomButton from 'components/CustomButton';
import css from './index.module.scss';

function AllCategoriesButton({
  setVisibleDrawer,
  width,
  height,
  styleTextButton,
}) {
  return (
    <CustomButton
      onClick={() => setVisibleDrawer(true)}
      type="primary"
      size="large"
      className={css.button}
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

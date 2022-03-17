import React, { useCallback } from 'react';
import { Drawer, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import VerticalCategoriesNav from './VerticalCategoriesNav';
import css from './index.module.scss';

function DrawerWithCourseCategories({ setVisible, visible, categories }) {
  const closeDrawer = useCallback(() => setVisible(false), [setVisible]);

  return (
    <Drawer
      headerStyle={{ backgroundColor: '#ffefd7' }}
      bodyStyle={{ backgroundColor: '#ffefd7' }}
      title={<div className={css.title}>Все направдения</div>}
      closable={false}
      onClose={closeDrawer}
      visible={visible}
      placement="top"
      height="min-content"
      extra={
        <Space>
          <CloseOutlined className={css.icon} onClick={closeDrawer} />
        </Space>
      }
    >
      <VerticalCategoriesNav categories={categories} />
    </Drawer>
  );
}

export default React.memo(DrawerWithCourseCategories);

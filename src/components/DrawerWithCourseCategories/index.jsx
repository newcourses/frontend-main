import React, { useCallback } from 'react';
import { Drawer, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import VerticalCategoriesNav from './VerticalCategoriesNav';
import css from './index.module.scss';
import CollapseCategoriesNav from './CollapseCategoriesNav';

function DrawerWithCourseCategories({ setVisible, visible, categories }) {
  const closeDrawer = useCallback(() => setVisible(false), [setVisible]);

  return (
    <Drawer
      headerStyle={{ backgroundColor: '#ffefd7' }}
      bodyStyle={{ backgroundColor: '#ffefd7' }}
      style={{ overflow: 'scroll' }}
      title={<div className={css.title}>Все направления</div>}
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
      <VerticalCategoriesNav
        categories={categories}
        closeDrawer={closeDrawer}
      />

      <CollapseCategoriesNav
        categories={categories}
        closeDrawer={closeDrawer}
      />
    </Drawer>
  );
}

export default React.memo(DrawerWithCourseCategories);

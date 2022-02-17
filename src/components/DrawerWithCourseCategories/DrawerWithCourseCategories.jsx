import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { ICourseCategoriesData } from '../../propTypes';
import VerticalCategoriesNav from './VerticalCategoriesNav/VerticalCategoriesNav';
import css from './DrawerWithCourseCategories.module.scss';

function DrawerWithCourseCategories({ setVisible, visible, categories }) {
  const closeDrawer = useCallback(() => setVisible(false), [setVisible]);

  return (
    <Drawer
      title={<div style={{ fontSize: '2.2rem' }}>Все направдения</div>}
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

DrawerWithCourseCategories.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  categories: ICourseCategoriesData.isRequired,
};
DrawerWithCourseCategories.defaultProps = {
  setVisible: () => {},
  visible: false,
};

export default React.memo(DrawerWithCourseCategories);

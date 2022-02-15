import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Drawer, Space } from 'antd';
// import css from './DrawerWithCourseCategories.module.scss';

function DrawerWithCourseCategories({ setVisible, visible }) {
  const closeDrawer = useCallback(() => setVisible(false), [setVisible]);

  return (
    <Drawer
      title="Все направдения"
      closable={false}
      onClose={closeDrawer}
      visible={visible}
      placement="top"
      extra={
        <Space>
          <Button onClick={closeDrawer}>Закрыть</Button>
        </Space>
      }
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
}

DrawerWithCourseCategories.propTypes = {
  setVisible: PropTypes.func,
  visible: PropTypes.bool,
};
DrawerWithCourseCategories.defaultProps = {
  setVisible: () => {},
  visible: false,
};

export default React.memo(DrawerWithCourseCategories);

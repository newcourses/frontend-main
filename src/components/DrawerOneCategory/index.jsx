import React from 'react';
import { Drawer, List, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import SubcategoryLink from 'components/SubcategoryLink';
import css from './index.module.scss';

function DrawerOneCategory({ category, closeDrawer, type }) {
  return (
    <Drawer
      headerStyle={{ backgroundColor: '#ffefd7' }}
      bodyStyle={{ backgroundColor: '#ffefd7' }}
      style={{ overflow: 'scroll' }}
      title={
        <div className={css.title}>
          Бесплатные курсы - {category?.attributes?.caption}
        </div>
      }
      closable={false}
      onClose={closeDrawer}
      visible={!!category}
      placement="top"
      height="min-content"
      extra={
        <Space>
          <CloseOutlined className={css.icon} onClick={closeDrawer} />
        </Space>
      }
    >
      <List
        className={css.wrapperList}
        grid={{ gutter: 30, column: 3 }}
        dataSource={(category && category.attributes.subcategories.data) || []}
        renderItem={({ attributes: subAttributes }) => (
          <List.Item>
            <SubcategoryLink
              type={type}
              caption={subAttributes.caption}
              code={subAttributes.code}
              closeDrawer={closeDrawer}
            />
          </List.Item>
        )}
      />

      <List
        className={css.vertWrapperList}
        dataSource={(category && category.attributes.subcategories.data) || []}
        renderItem={({ attributes: subAttributes }) => (
          <List.Item>
            <SubcategoryLink
              type={type}
              caption={subAttributes.caption}
              code={subAttributes.code}
              closeDrawer={closeDrawer}
            />
          </List.Item>
        )}
      />
    </Drawer>
  );
}

export default React.memo(DrawerOneCategory);

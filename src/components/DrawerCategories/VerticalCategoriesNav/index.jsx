import React from 'react';
import { List, Tabs } from 'antd';
import SubcategoryLink from 'components/SubcategoryLink';
import css from './index.module.scss';

const { TabPane } = Tabs;

function VerticalCategoriesNav({ categories, closeDrawer }) {
  return (
    <Tabs className={css.container} tabPosition="left" size="large">
      {categories.map(({ attributes }) => (
        <TabPane
          tab={<div className={css.tabTitle}>{attributes.caption}</div>}
          key={attributes.code}
        >
          <List
            className={css.wrapperList}
            grid={{ gutter: 16, column: 2 }}
            dataSource={attributes.subcategories.data}
            renderItem={({ attributes: subAttributes }) => (
              <List.Item>
                <SubcategoryLink
                  caption={subAttributes.caption}
                  code={subAttributes.code}
                  closeDrawer={closeDrawer}
                />
              </List.Item>
            )}
          />
        </TabPane>
      ))}
    </Tabs>
  );
}

export default React.memo(VerticalCategoriesNav);

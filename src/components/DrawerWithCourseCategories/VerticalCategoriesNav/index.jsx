import React from 'react';
import Link from 'next/link';
import { List, Tabs } from 'antd';
import NAVIGATION from 'library/navigation';
import css from './index.module.scss';

const { TabPane } = Tabs;

function VerticalCategoriesNav({ categories }) {
  return (
    <Tabs className={css.container} tabPosition="left" size="large">
      {categories.map(({ attributes }) => (
        <TabPane
          tab={<div className={css.tabTitle}>{attributes.caption}</div>}
          key={attributes.code}
        >
          <List
            dataSource={attributes.subcategories.data}
            renderItem={({ attributes: subAttributes }) => (
              <List.Item>
                <Link
                  href={NAVIGATION.coursesCategory.link}
                  as={NAVIGATION.coursesCategory.as(subAttributes.code)}
                >
                  <a className={css.linkText}>{subAttributes.caption}</a>
                </Link>
              </List.Item>
            )}
          />
        </TabPane>
      ))}
    </Tabs>
  );
}

export default React.memo(VerticalCategoriesNav);

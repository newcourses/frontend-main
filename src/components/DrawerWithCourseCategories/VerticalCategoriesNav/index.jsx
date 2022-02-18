import React from 'react';
import { List, Tabs } from 'antd';
import Link from 'next/link';
import css from './index.module.scss';
import { ICourseCategoriesData } from '../../../propTypes';
import NAVIGATION from '../../../library/navigation';

const { TabPane } = Tabs;

function VerticalCategoriesNav({ categories }) {
  return (
    <Tabs
      className={css.container}
      tabPosition="left"
      size="large"
    >
      {categories.map(({ attributes }) => (
        <TabPane
          tab={<div className={css.tabTitle}>{attributes.caption}</div>}
          key={attributes.value}
        >
          <List
            dataSource={attributes.subcategories.data}
            renderItem={({ attributes: subAttributes }) => (
              <List.Item>
                <Link
                  href={NAVIGATION.coursesCategory.link}
                  as={NAVIGATION.coursesCategory.as(subAttributes.value)}
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

VerticalCategoriesNav.propTypes = {
  categories: ICourseCategoriesData,
};
VerticalCategoriesNav.defaultProps = {
  categories: [],
};

export default React.memo(VerticalCategoriesNav);

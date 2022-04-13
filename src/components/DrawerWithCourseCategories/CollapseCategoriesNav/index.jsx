import React from 'react';
import { Collapse, List } from 'antd';
import css from './index.module.scss';
import SubcategoryLink from '../SubcategoryLink';

const { Panel } = Collapse;

function CollapseCategoriesNav({ categories, closeDrawer }) {
  return (
    <Collapse
      bordered={false}
      style={{ background: '#ffefd7' }}
      className={css.container}
    >
      {categories.map(({ attributes }) => (
        <Panel header={attributes.caption} key={attributes.value}>
          {attributes.subcategories.data.map(
            ({ attributes: subAttributes }) => (
              <List.Item>
                <SubcategoryLink
                  caption={subAttributes.caption}
                  code={subAttributes.code}
                  closeDrawer={closeDrawer}
                />
              </List.Item>
            ),
          )}
        </Panel>
      ))}
    </Collapse>
  );
}

export default React.memo(CollapseCategoriesNav);

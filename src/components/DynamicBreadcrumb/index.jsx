import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from 'antd';
import css from './index.module.scss';

function DynamicBreadcrumb({ items }) {
  return (
    <Breadcrumb className={css.container}>
      {items.map(({ value, navigation, caption }) => (
        <Breadcrumb.Item key={value}>
          {navigation ? (
            <Link href={navigation.link} as={navigation.as}>
              <a>{navigation.caption}</a>
            </Link>
          ) : (
            caption
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default React.memo(DynamicBreadcrumb);

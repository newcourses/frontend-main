import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import css from './index.module.scss';

function DynamicNav({ links, addition }) {
  const location = useRouter();
  const query = {};
  if (location.query.code) {
    query['subcategories[0]'] = location.query.code;
  }
  return (
    <ul className={css.linksContainer}>
      <li>
        <Link
          href={{
            pathname: '/products',
            query,
          }}
        >
          <a className={cn(css.linkWrapper, css.link)}>
            <SearchOutlined style={{ fontSize: 20 }} />
          </a>
        </Link>
      </li>
      {links.map((navElement) => (
        <li key={`${navElement.link}`}>
          <Link href={navElement.link}>
            <a className={cn(css.linkWrapper, css.link)}>
              {navElement.caption}
            </a>
          </Link>
        </li>
      ))}
      {addition && (
        <li className={cn(css.linkWrapper, css.link)}>{addition}</li>
      )}
    </ul>
  );
}

export default React.memo(DynamicNav);

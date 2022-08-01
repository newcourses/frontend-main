import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import css from './index.module.scss';

function DynamicNav({ links, addition }) {
  const location = useRouter();
  return (
    <ul className={css.linksContainer}>
      <li>
        <Link
          href={{
            pathname: '/courses',
            query: { subcategory: location.query.code },
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

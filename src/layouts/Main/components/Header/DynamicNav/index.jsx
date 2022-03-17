import React from 'react';
import Link from 'next/link';
import cn from 'classnames';
import css from './index.module.scss';

function DynamicNav({ links }) {
  return (
    <ul className={css.linksContainer}>
      {links.map((navElement) => (
        <li key={`${navElement.link}`}>
          <Link href={navElement.link}>
            <a className={cn(css.linkWrapper, css.link)}>
              {navElement.caption}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(DynamicNav);

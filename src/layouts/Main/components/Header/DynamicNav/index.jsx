import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import css from './index.module.scss';

function DynamicNav({ links, addition }) {
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
      {addition && (
        <li className={cn(css.linkWrapper, css.link)}>{addition}</li>
      )}
    </ul>
  );
}

export default React.memo(DynamicNav);

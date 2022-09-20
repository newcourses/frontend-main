import React from 'react';
import Link from 'next/link';
import NAVIGATION from 'library/navigation';
import css from './index.module.scss';

function SubcategoryLink({
  code,
  caption,
  closeDrawer,
  type = 'coursesCategory',
}) {
  return (
    <Link href={NAVIGATION[type].link} as={NAVIGATION[type].as(code)}>
      <a
        className={css.linkText}
        onClick={closeDrawer}
        role="button"
        tabIndex="0"
      >
        {caption}
      </a>
    </Link>
  );
}

export default React.memo(SubcategoryLink);

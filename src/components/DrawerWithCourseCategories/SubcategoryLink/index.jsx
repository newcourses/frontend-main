import React from 'react';
import Link from 'next/link';
import css from './index.module.scss';
import NAVIGATION from '../../../library/navigation';

function SubcategoryLink({ code, caption, closeDrawer }) {
  return (
    <Link
      href={NAVIGATION.coursesCategory.link}
      as={NAVIGATION.coursesCategory.as(code)}
    >
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

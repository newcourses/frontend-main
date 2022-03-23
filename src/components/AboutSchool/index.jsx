import React from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { declOfNumReviews } from 'helpers';
import NAVIGATION from 'library/navigation';
import CustomRate from 'components/CustomRate';
import css from './index.module.scss';

function AboutSchool({
  name,
  code,
  grade,
  mainLink,
  countReviews,
  wrapperStyles,
}) {
  return (
    <div className={cn(css.aboutSchool, wrapperStyles)}>
      <a
        href={mainLink}
        target="_blank"
        rel="noopener noreferrer"
        className={css.name}
      >
        {name}
      </a>
      <CustomRate grade={grade} />
      <Link
        href={NAVIGATION.schoolReview.link}
        as={NAVIGATION.schoolReview.as(code)}
      >
        <a target="_blank" className={css.reviews} rel="noopener noreferrer">
          {declOfNumReviews(countReviews, true)} о школе
        </a>
      </Link>
    </div>
  );
}

export default React.memo(AboutSchool);

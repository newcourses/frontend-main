import React from 'react';
import Link from 'next/link';
import { declOfNumReviews } from 'helpers';
import NAVIGATION from 'library/navigation';
import CustomRate from 'components/CustomRate';
import css from './index.module.scss';

function OtherSchools({ schools }) {
  return (
    <div>
      <p className={css.title}>Отзывы о других школах:</p>
      {schools.map(({ id, attributes }) => (
        <Link
          key={id}
          href={NAVIGATION.schoolReview.link}
          as={NAVIGATION.schoolReview.as(attributes.code)}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={id}
            className={css.wrapper}
          >
            <div className={css.name}>{attributes.name}</div>
            <div>{declOfNumReviews(attributes.countReviews, true)}</div>
            <CustomRate grade={attributes.grade} size={14} hiddenGrade />
          </a>
        </Link>
      ))}
    </div>
  );
}

export default React.memo(OtherSchools);

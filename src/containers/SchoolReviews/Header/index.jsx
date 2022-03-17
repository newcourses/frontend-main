import React from 'react';
import css from './index.module.scss';
import CustomRate from '../../../components/CustomRate';
import { declOfNumReviews } from '../../../helpers';
import ReviewsByEmoji from './ReviewsByEmoji';

function Header({ mainLink, name, grade, countReviews, displayLink }) {
  return (
    <section className={css.container}>
      <h1 className={css.title}>{name}</h1>
      <div className={css.wrapper}>
        <CustomRate grade={grade} wrapperStyle={css.wrapperCustomRate} />
        <span className={css.countReviews}>
          {declOfNumReviews(countReviews, true)}
        </span>
        <ReviewsByEmoji />
        <a
          className={css.link}
          target="_blank"
          rel="noopener noreferrer"
          href={mainLink}
        >
          {displayLink}
        </a>
      </div>
    </section>
  );
}

export default React.memo(Header);

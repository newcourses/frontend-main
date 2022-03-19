import React from 'react';
import { declOfNumReviews } from 'helpers';
import CustomRate from 'components/CustomRate';
import css from './index.module.scss';
import ReviewsByEmoji from './ReviewsByEmoji';

function Header({
  mainLink,
  name,
  grade,
  countReviews,
  displayLink,
  gradeByEmoji,
}) {
  return (
    <section className={css.container}>
      <h1 className={css.title}>{name}</h1>
      <div className={css.wrapper}>
        <CustomRate grade={grade} wrapperStyle={css.wrapperCustomRate} />
        <span className={css.countReviews}>
          {declOfNumReviews(countReviews, true)}
        </span>
        <ReviewsByEmoji
          neg={gradeByEmoji.neg}
          neu={gradeByEmoji.neu}
          pos={gradeByEmoji.pos}
        />
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

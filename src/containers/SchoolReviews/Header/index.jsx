import React from 'react';
import css from './index.module.scss';
import CustomRate from '../../../components/CustomRate';
import { declOfNumReviews } from '../../../helpers';
import ReviewsByEmoji from './ReviewsByEmoji';

function Header() {
  return (
    <section className={css.container}>
      <h1 className={css.title}>Skyeng</h1>
      <div className={css.wrapper}>
        <CustomRate grade={3.5} wrapperStyle={css.wrapperCustomRate} />
        <span className={css.countReviews}>{declOfNumReviews(3, true)}</span>
        <ReviewsByEmoji />
        <a
          className={css.link}
          target="_blank"
          rel="noopener noreferrer"
          href="https://skyeng.ru"
        >
          skyeng.ru
        </a>
      </div>
    </section>
  );
}

export default React.memo(Header);

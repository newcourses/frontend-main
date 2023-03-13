import React from 'react';
import css from './index.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';

function SchoolCard({
  logo,
  code,
  grade,
  mainLink,
  description,
  displayLink,
  countReviews,
}) {
  return (
    <div className={css.wrapper}>
      <Header
        logo={logo}
        grade={grade}
        code={code}
        mainLink={mainLink}
        displayLink={displayLink}
        countReviews={countReviews}
      />
      <hr className={css.line} />
      <Footer description={description} code={code} />
    </div>
  );
}

export default React.memo(SchoolCard);

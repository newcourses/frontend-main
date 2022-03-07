import React from 'react';
import css from './index.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { ISchoolAttributes } from '../../propTypes';

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
      <Footer description={description} />
    </div>
  );
}

SchoolCard.propTypes = {
  ...ISchoolAttributes,
};
SchoolCard.defaultProps = {
  logo: {},
};

export default React.memo(SchoolCard);

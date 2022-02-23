import React from 'react';
import css from './index.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import { ISchoolCard } from '../../propTypes';

function SchoolCard({ logo, value, mainLink, description, countReviews }) {
  return (
    <div className={css.wrapper}>
      <Header
        logo={logo}
        value={value}
        mainLink={mainLink}
        countReviews={countReviews}
      />
      <hr className={css.line} />
      <Footer description={description} />
    </div>
  );
}

SchoolCard.propTypes = {
  ...ISchoolCard,
};
SchoolCard.defaultProps = {
  description: '',
  logo: {},
};

export default React.memo(SchoolCard);

import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import { ISchoolReviews } from '../../propTypes';

function SchoolReviews({ reviews }) {
  return (
    <main>
      <Header />
      <Content reviews={reviews} />
    </main>
  );
}

SchoolReviews.propTypes = {
  reviews: ISchoolReviews,
};
SchoolReviews.defaultProps = {
  reviews: {
    data: [],
    meta: {},
  },
};

export default React.memo(SchoolReviews);

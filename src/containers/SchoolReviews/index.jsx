import React from 'react';
import Header from './Header';
import Content from './Content';

function SchoolReviews({ reviews }) {
  return (
    <main>
      <Header />
      <Content reviews={reviews} />
    </main>
  );
}

export default React.memo(SchoolReviews);

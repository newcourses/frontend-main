import React from 'react';
import Content from './Content';
import Header from './Header';

function ShowcasePromoCodes({ promoCodes }) {
  return (
    <>
      <Header />
      <Content promoCodes={promoCodes} />
    </>
  );
}

export default React.memo(ShowcasePromoCodes);

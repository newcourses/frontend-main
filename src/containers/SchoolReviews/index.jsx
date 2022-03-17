import React from 'react';
import Header from './Header';
import Content from './Content';

function SchoolReviews({
  school,
  reviews,
  categories,
  otherSchools,
  setVisibleDrawer,
}) {
  return (
    <main>
      <Header {...school?.attributes} />
      <Content
        school={school}
        reviews={reviews}
        categories={categories}
        otherSchools={otherSchools}
        setVisibleDrawer={setVisibleDrawer}
      />
    </main>
  );
}

export default React.memo(SchoolReviews);

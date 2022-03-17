import React from 'react';
import Main from '../../../../layouts/Main';
import useVisibleDrawer from '../../../../hooks/useVisibleDrawer';
import getCategories from '../../../../controllers/getCategories';
import SchoolReviews from '../../../../containers/SchoolReviews';
import getSchoolReviews from '../../../../controllers/getSchoolReviews';
import { prepareSchoolReviews } from '../../../../helpers/preparersData';
import getSchools from '../../../../controllers/getSchools';

function SchoolReviewsPage({ categories, reviews, school, otherSchools }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <SchoolReviews
        school={school}
        reviews={reviews}
        categories={categories.data}
        otherSchools={otherSchools.data}
        setVisibleDrawer={setVisibleDrawer}
      />
    </Main>
  );
}

export async function getServerSideProps(context) {
  const schoolCode = context.params.code;
  const schoolReviews = await getSchoolReviews({ code: schoolCode });
  const school = await getSchools({
    customFields: 'grade',
    filters: { code: schoolCode },
  });
  const otherSchools = await getSchools({
    pagination: { limit: 6 },
    customFields: 'grade',
    filters: {
      code: { $ne: schoolCode },
    },
  });
  schoolReviews.data = prepareSchoolReviews(schoolReviews.data);

  const categories = await getCategories();

  return {
    props: {
      categories,
      reviews: schoolReviews,
      school: school?.data?.[0] || null,
      otherSchools,
    },
  };
}

export default React.memo(SchoolReviewsPage);

import React from 'react';
import Main from '../../../../layouts/Main';
import { ICourseCategories, ISchoolReviews } from '../../../../propTypes';
import useVisibleDrawer from '../../../../hooks/useVisibleDrawer';
import getCategories from '../../../../controllers/getCategories';
import SchoolReviews from '../../../../containers/SchoolReviews';
import getSchoolReviews from '../../../../controllers/getSchoolReviews';
import { prepareSchoolReviews } from '../../../../helpers/preparersData';

function SchoolReviewsPage({ categories, reviews }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <SchoolReviews reviews={reviews} />
    </Main>
  );
}

SchoolReviewsPage.propTypes = {
  categories: ICourseCategories,
  reviews: ISchoolReviews,
};

SchoolReviewsPage.defaultProps = {
  categories: {
    data: [],
  },
  reviews: {
    data: [],
    meta: {},
  },
};

export async function getServerSideProps(context) {
  const schoolCode = context.params.code;
  const schoolReviews = await getSchoolReviews({ code: schoolCode });
  schoolReviews.data = prepareSchoolReviews(schoolReviews);

  const categories = await getCategories();

  return {
    props: { categories, reviews: schoolReviews },
  };
}

export default React.memo(SchoolReviewsPage);

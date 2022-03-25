import React from 'react';
import Main from 'layouts/Main';
import { DateTime } from 'luxon';
import getSchools from 'controllers/getSchools';
import SchoolReviews from 'containers/SchoolReviews';
import getCategories from 'controllers/getCategories';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import getSchoolReviews from 'controllers/getSchoolReviews';
import { prepareSchoolReviews } from 'helpers/preparersData';
import { declOfNumRealReviews } from 'helpers/declOfNumInstances';

const generateTitle = (schoolName, reviews) => {
  return `${schoolName} - ${declOfNumRealReviews(
    reviews,
    true,
  )} и обучение в ${DateTime.now().toFormat('yyyy')}`;
};

const generateDescription = (schoolName) => {
  return `Только реальные отзывы о школе ${schoolName}, о рейтинге курсов и качестве обучения, квалификации преподавателей и возможности трудоустройства, честная оценка на платформе Newcourses.`;
};

function SchoolReviewsPage({ categories, reviews, school, otherSchools }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();

  const schoolName = school.attributes?.name;
  const title = generateTitle(schoolName, reviews.data?.length);
  const description = generateDescription(schoolName);

  return (
    <Main
      title={title}
      description={description}
      categories={categories.data}
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
    >
      <SchoolReviews
        school={school}
        reviews={reviews.data}
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

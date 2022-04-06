import React from 'react';
import Main from 'layouts/Main';
import { DateTime } from 'luxon';
import NAVIGATION from 'library/navigation';
import SchoolsServices from 'api/services/schools';
import ReviewsServices from 'api/services/reviews';
import SchoolReviews from 'containers/SchoolReviews';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';
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

  const items = [
    { value: 'home', caption: 'Главная', navigation: NAVIGATION.home },
    { value: 'schools', caption: 'Школы', navigation: NAVIGATION.schoolsList },
    { value: 'courses-category', caption: schoolName },
  ];

  return (
    <Main
      title={title}
      displayBackTopButton
      description={description}
      categories={categories.data}
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
    >
      <main>
        <section>
          <DynamicBreadcrumb items={items} />
        </section>
        <section>
          <SchoolReviews
            school={school}
            reviews={reviews.data}
            categories={categories.data}
            otherSchools={otherSchools.data}
            setVisibleDrawer={setVisibleDrawer}
          />
        </section>
      </main>
    </Main>
  );
}

export async function getServerSideProps(context) {
  const schoolCode = context.params.code;
  const schoolReviews = await ReviewsServices.getList({ code: schoolCode });
  const school = await SchoolsServices.getList({
    customFields: 'grade',
    filters: { code: schoolCode },
  });
  const otherSchools = await SchoolsServices.getList({
    pagination: { limit: 6 },
    customFields: 'grade',
    filters: {
      code: { $ne: schoolCode },
    },
  });
  schoolReviews.data = prepareSchoolReviews(schoolReviews.data);

  const categories = await CategoriesServices.getList();

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

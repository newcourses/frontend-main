import React from 'react';
import Main from 'layouts/Main';
import { DateTime } from 'luxon';
import NAVIGATION from 'library/navigation';
import ReviewsServices from 'api/services/reviews';
import SchoolReviews from 'containers/SchoolReviews';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';
import { prepareSchoolReviews } from 'helpers/preparersData';
import { declOfNumRealReviews } from 'helpers/declOfNumInstances';
import SchoolController from '../../../../controllers/school';

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
  const title = generateTitle(schoolName, school.attributes?.countReviews);
  const description = generateDescription(schoolName);

  const items = [
    { value: 'home', navigation: NAVIGATION.home },
    { value: 'schools', navigation: NAVIGATION.schoolsList },
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

export async function getServerSideProps(ctx) {
  const schoolCode = ctx.params.code;
  const schoolReviews = await ReviewsServices.getList({ code: schoolCode });
  const school = await SchoolController.getList({
    schoolCode,
  });
  const otherSchools = await SchoolController.getList({
    limit: 6,
    schoolCode: { $ne: schoolCode },
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

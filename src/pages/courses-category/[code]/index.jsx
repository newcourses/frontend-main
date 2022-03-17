import React from 'react';
import Main from '../../../layouts/Main';
import SchoolsInfo from '../../../containers/SchoolsInfo';
import CoursesTable from '../../../containers/CoursesTable';
import useVisibleDrawer from '../../../hooks/useVisibleDrawer';
import getCategories from '../../../controllers/getCategories';
import ShowcaseCourses from '../../../containers/ShowcaseCourses';
import getCourses from '../../../controllers/getCourses';
import getSchools from '../../../controllers/getSchools';

function CourseCategory({ categories, courses, schools }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <main>
        <section>
          <CoursesTable
            title="Курсы по product-менеджменту"
            description="Здесь собран 81 онлайн-курс обучения продакт-менеджеров. 1 раз в неделю мы обновляем информацию о всех курсах."
            dataSource={courses.data}
          />
        </section>
        <section>
          <SchoolsInfo
            title="Курсы по product-менеджменту"
            description="Здесь собран 81 онлайн-курс обучения продакт-менеджеров. 1 раз в неделю мы обновляем информацию о всех курсах."
            schools={schools.data}
          />
        </section>
        <section>
          <ShowcaseCourses
            title="Эти же курсы, но подробнее:"
            cards={courses.data}
          />
        </section>
      </main>
    </Main>
  );
}

export async function getServerSideProps({ params }) {
  const categories = await getCategories();
  const courses = await getCourses({
    customFields: 'grade',
    pagination: { page: 'all' },
    populate: 'params',
    code: params.code,
  });
  const schools = await getSchools({
    pagination: { page: 'all' },
    customFields: 'grade',
    filters: {
      courses: {
        subcategory: {
          code: { $eq: params.code },
        },
      },
    },
    populate: {
      advantages: '*',
      disadvantages: '*',
      courses: {
        filters: {
          subcategory: {
            code: { $eq: params.code },
          },
        },
      },
    },
  });

  return {
    props: {
      categories,
      courses,
      schools,
    },
  };
}

export default React.memo(CourseCategory);

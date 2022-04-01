import React from 'react';
import Main from 'layouts/Main';
import NAVIGATION from 'library/navigation';
import getCourses from 'controllers/getCourses';
import SchoolsInfo from 'containers/SchoolsInfo';
import CoursesTable from 'containers/CoursesTable';
import SchoolsServices from 'api/services/schools';
import getCategories from 'controllers/getCategories';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import ShowcaseCourses from 'containers/ShowcaseCourses';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';
import { declOfNumCourses } from 'helpers/declOfNumInstances';
import SubscribeNewsletter from 'components/SubscribeNewsletter';

const generateTitle = (countCourses, subcategoryCaption) => {
  return `Топ - ${declOfNumCourses(
    countCourses,
    true,
  )} по ${subcategoryCaption}, обучение в лучших школах`;
};

const generateDescription = (subcategoryCaption) => {
  return `Сравнение лучших курсов, обучающих ${subcategoryCaption} с нуля, их стоимость и сроки обучения, рейтинг  онлайн школ, честная оценка качества образования на платформе Newcourses`;
};

function CourseCategory({ categories, courses, schools, currentSubcategory }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();

  const subcategoryCaption = currentSubcategory.attributes.caption;
  const title = generateTitle(courses.data.length, subcategoryCaption);
  const description = generateDescription(subcategoryCaption);

  const items = [
    { value: 'home', caption: 'Главная', navigation: NAVIGATION.home },
    { value: 'courses', caption: 'Курсы' },
    { value: 'courses-category', caption: subcategoryCaption },
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
          <SubscribeNewsletter />
        </section>

        <section>
          <CoursesTable
            title={currentSubcategory.attributes?.title}
            // TODO динамический description
            description="Здесь собран 81 онлайн-курс обучения продакт-менеджеров. 1 раз в неделю мы обновляем информацию о всех курсах."
            dataSource={courses.data}
          />
        </section>
        <section>
          <SchoolsInfo
            title="Курсы по product-менеджменту"
            // TODO динамический description
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

  const schools = await SchoolsServices.getList({
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

  let currentSubcategory;

  categories.data.find((category) => {
    currentSubcategory = category.attributes.subcategories.data.find(
      (subcategory) => subcategory.attributes.code === params.code,
    );
    return currentSubcategory;
  });

  return {
    props: {
      currentSubcategory,
      categories,
      courses,
      schools,
    },
  };
}

export default React.memo(CourseCategory);

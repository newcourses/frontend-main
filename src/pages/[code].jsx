import React from 'react';
import Main from 'layouts/Main';
import NAVIGATION from 'library/navigation';
import SchoolsInfo from 'containers/SchoolsInfo';
import CoursesTable from 'containers/CoursesTable';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import ShowcaseCourses from 'containers/ShowcaseCourses';
import CategoriesServices from 'api/services/categories';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';
import {
  declOfNumSchool,
  declOfNumAssembled,
  declOfNumOnlineCourses,
} from 'helpers/declOfNumInstances';
import SubscribeNewsletter from 'components/SubscribeNewsletter';
import replaceCourseToSchool from 'helpers/replaceCourseToSchool';
import ProductController from 'controllers/product';
import SchoolController from 'controllers/school';
import { generateTitle } from 'helpers';

const generateDescription = (categoryCaption) => {
  return `Сравнение лучших курсов, обучающих ${categoryCaption} с нуля, их стоимость и сроки обучения, рейтинг  онлайн школ, честная оценка качества образования на платформе Newcourses`;
};

function CourseCategory({ categories, courses, schools, currentCategory }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();

  const categoryCaption = currentCategory.attributes.caption;
  const title = generateTitle(courses.data?.length || 0, categoryCaption);
  const description = generateDescription(categoryCaption);

  const items = [
    { value: 'home', navigation: NAVIGATION.home },
    { value: 'courses', caption: 'Курсы' },
    { value: 'courses-category', caption: categoryCaption },
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
            title={currentCategory.attributes?.title}
            description={`Здесь ${declOfNumAssembled(
              courses.data.length,
            )} ${declOfNumOnlineCourses(
              courses.data.length,
              true,
            )} обучения. Мы регулярно обновляем информацию о всех курсах.`}
            dataSource={courses.data}
          />
        </section>
        <section>
          <SchoolsInfo
            title={replaceCourseToSchool(currentCategory.attributes?.title)}
            description={`Здесь ${declOfNumAssembled(
              schools.data.length,
            )} ${declOfNumSchool(schools.data.length, true)} у которых есть 
            ${currentCategory.attributes?.title.toLowerCase()}.`}
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
  const categories = await CategoriesServices.getList();

  const courses = await ProductController.getList({
    page: 'all',
    subcategories: [params.code],
    category: params.code,
    isFree: false,
  });

  const schools = await SchoolController.getList({
    page: 'all',
    isFree: false,
    category: params.code,
    isPopulateProducts: true,
    isPopulateQuality: true,
    productType: 'course',
  });

  const currentCategory = categories.data.find(
    (category) => category.attributes.code === params.code,
  );

  return {
    props: {
      currentCategory,
      categories,
      courses,
      schools,
    },
  };
}

export default React.memo(CourseCategory);

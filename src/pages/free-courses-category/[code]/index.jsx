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
  declOfNumFreeOnlineCourses,
} from 'helpers/declOfNumInstances';
import SubscribeNewsletter from 'components/SubscribeNewsletter';
import replaceCourseToSchool from 'helpers/replaceCourseToSchool';
import SchoolController from '../../../controllers/school';
import ProductController from '../../../controllers/product';

const generateTitle = (countCourses, subcategoryCaption) => {
  return `Топ - ${declOfNumFreeOnlineCourses(
    countCourses,
    true,
  )} по ${subcategoryCaption}, обучение в лучших школах`;
};

const generateDescription = (subcategoryCaption) => {
  return `Сравнение лучших курсов, обучающих ${subcategoryCaption} с нуля, их стоимость и сроки обучения, рейтинг  онлайн школ, честная оценка качества образования на платформе Newcourses`;
};

function FreeCoursesCategory({
  categories,
  courses,
  schools,
  currentSubcategory,
}) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();

  const subcategoryCaption = currentSubcategory.attributes.caption;
  const title = generateTitle(courses.data?.length || 0, subcategoryCaption);
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
            title={`Бесплатные ${currentSubcategory.attributes?.title?.replace(
              'Курсы',
              'курсы',
            )}`}
            description={`Здесь ${declOfNumAssembled(
              courses.data.length,
            )} ${declOfNumFreeOnlineCourses(
              courses.data.length,
              true,
            )} обучения. Мы регулярно обновляем информацию о всех курсах.`}
            dataSource={courses.data}
          />
        </section>
        <section>
          <SchoolsInfo
            title={replaceCourseToSchool(currentSubcategory.attributes?.title)}
            description={`Здесь ${declOfNumAssembled(
              schools.data.length,
            )} ${declOfNumSchool(
              schools.data.length,
              true,
            )} у которых есть бесплатные
            ${currentSubcategory.attributes?.title?.toLowerCase()}.`}
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
    isFree: true,
  });

  const schools = await SchoolController.getList({
    page: 'all',
    customFields: 'grade',
    isPopulateProducts: true,
    isPopulateQuality: true,
    productType: 'course',
    isFree: true,
    subcategory: params.code,
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

export default React.memo(FreeCoursesCategory);

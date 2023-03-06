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
import SeoDescription from '../../../containers/SeoDescription';

const generateDescription = (subcategoryCaption) => {
  return `Сравнение лучших курсов, обучающих ${subcategoryCaption} с нуля, их стоимость и сроки обучения, рейтинг  онлайн школ, честная оценка качества образования на платформе Newcourses`;
};

function CourseSubcategory({
  courses,
  schools,
  categories,
  currentSubcategory,
}) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();

  const subcategoryCaption = currentSubcategory.attributes.caption;
  const title = generateTitle(courses.data?.length || 0, subcategoryCaption);
  const description = generateDescription(subcategoryCaption);

  const items = [
    { value: 'home', navigation: NAVIGATION.home },
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
            title={replaceCourseToSchool(currentSubcategory.attributes?.title)}
            description={`Здесь ${declOfNumAssembled(
              schools.data.length,
            )} ${declOfNumSchool(schools.data.length, true)} у которых есть 
            ${currentSubcategory.attributes?.title.toLowerCase()}.`}
            schools={schools.data}
          />
        </section>
        <section>
          <ShowcaseCourses
            title="Эти же курсы, но подробнее:"
            cards={courses.data}
          />
        </section>

        <section>
          <SeoDescription>
            Сравните лучшие{' '}
            {currentSubcategory.attributes?.title?.toLowerCase()} для начинающих
            и продвинутых специалистов, выберите наиболее подходящее
            предложение. На нашем ресурсе доступно {courses.data.length}
            онлайн-курсов, которые помогут вам стать экспертом в этой области.
            Выберите курс, который соответствует вашим потребностям и начните
            свой путь к успешной карьере. Все отзывы{' '}
            {currentSubcategory.attributes?.title?.replace('Курсы', '')},
            честные и независимые и проходят строгую модерацию.
          </SeoDescription>
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
    isFree: false,
  });

  const schools = await SchoolController.getList({
    page: 'all',
    isFree: false,
    productType: 'course',
    subcategory: params.code,
    isPopulateProducts: true,
    isPopulateQuality: true,
  });

  const currentSubcategory = categories.data.find((category) => {
    return category.attributes.subcategories.data.find(
      (subcategory) => subcategory.attributes.code === params.code,
    );
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

export default React.memo(CourseSubcategory);

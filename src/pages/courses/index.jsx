import React from 'react';
import Filters from '../../containers/Filters';
import Main from '../../layouts/Main';
import CategoriesServices from '../../api/services/categories';
import useVisibleDrawer from '../../hooks/useVisibleDrawer';
import ProductsServices from '../../api/services/products';
import ShowcaseCourses from '../../containers/ShowcaseCourses';

function Courses({ categories, courses }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();

  const title = 'Курсы по твоему запросу';
  const description = 'Собери самостоятельно подборку интересующих тебя курсов';
  return (
    <Main
      title={title}
      displayBackTopButton
      description={description}
      categories={categories.data}
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
    >
      <section>
        <Filters categories={categories.data} />
      </section>
      <section>
        <ShowcaseCourses title="Курсы по запросу:" cards={courses.data} />
      </section>
    </Main>
  );
}
export async function getServerSideProps({ query }) {
  const courses = await ProductsServices.getList({
    customFields: 'grade',
    filters: {
      product_type: {
        code: 'course',
      },
      subcategories: {
        code: query.subcategory,
      },
      isFree: false,
    },
    pagination: { page: 'all' },
    populate: 'params',
  });
  const categories = await CategoriesServices.getList();

  return {
    props: {
      categories,
      courses,
    },
  };
}

export default React.memo(Courses);

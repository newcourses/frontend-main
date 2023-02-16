import React from 'react';
import Main from 'layouts/Main';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import SearchHandler from 'utils/SearchHandler';
import ProductController from 'controllers/product';
import ShowcaseProducts from 'containers/ShowcaseProducts';

function Products({ categories, courses }) {
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
        <ShowcaseProducts
          cards={courses.data}
          title="Курсы по запросу:"
          categories={categories.data}
          cardsPagination={courses.meta.pagination}
        />
      </section>
    </Main>
  );
}
export async function getServerSideProps(ctx) {
  const query = SearchHandler.parse(ctx.req.url.split('?')[1]);

  const courses = await ProductController.getList(query);
  const categories = await CategoriesServices.getList();

  return {
    props: {
      categories,
      courses,
    },
  };
}

export default React.memo(Products);

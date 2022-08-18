import qs from 'qs';
import React from 'react';
import Main from 'layouts/Main';
import Filters from 'containers/Filters';
import ProductsServices from 'api/services/products';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import ShowcaseCourses from 'containers/ShowcaseCourses';

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
export async function getServerSideProps(ctx) {
  const query = qs.parse(ctx.req.url.split('?')[1]);

  const filters = {};

  if (query.price?.length === 2) {
    filters.$and = [
      {
        $or: [
          {
            price: {
              $gte: query.price[0],
            },
          },
          {
            oldPrice: {
              $gte: query.price[0],
            },
          },
        ],
      },
      {
        $or: [
          {
            price: {
              $lte: query.price[1],
            },
          },
          {
            oldPrice: {
              $lte: query.price[1],
            },
          },
        ],
      },
    ];
  }

  const courses = await ProductsServices.getList({
    customFields: 'grade',
    filters: {
      title: { $containsi: query.title },
      product_type: {
        code: 'course',
      },
      ...filters,
      isFree: query.isFree,
      subcategories: {
        code: {
          $in: query?.subcategories,
        },
        categories: {
          code: {
            $in: query?.categories,
          },
        },
      },
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

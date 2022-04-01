import React from 'react';
import Main from 'layouts/Main';
import MainBanner from 'containers/MainBanner';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import CourseCategories from 'containers/CourseCategories';

function Home({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <main>
        <MainBanner setVisibleDrawer={setVisibleDrawer} />
      </main>
      <section>
        <CourseCategories
          categories={categories.data}
          setVisibleDrawer={setVisibleDrawer}
        />
      </section>
    </Main>
  );
}

export async function getServerSideProps() {
  const categories = await CategoriesServices.getList();
  return {
    props: { categories },
  };
}

export default React.memo(Home);

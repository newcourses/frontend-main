import React from 'react';
import Main from '../layouts/Main';
import CourseCategories from '../containers/CourseCategories';
import { ICourseCategories } from '../propTypes';
import MainBanner from '../containers/MainBanner';
import useVisibleDrawer from '../hooks/useVisibleDrawer';
import getCategories from '../controllers/getCategories';

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

Home.propTypes = {
  categories: ICourseCategories,
};

Home.defaultProps = {
  categories: {
    data: [],
  },
};

export async function getServerSideProps() {
  const categories = await getCategories();

  return {
    props: { categories },
  };
}

export default React.memo(Home);

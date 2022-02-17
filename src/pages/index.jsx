import React from 'react';
import Main from '../layouts/Main/Main';
import CourseCategories from '../containers/CourseCategories/CourseCategories';
import { ICourseCategories } from '../propTypes';
import MainBanner from '../containers/MainBanner/MainBanner';
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
        <CourseCategories
          categories={categories.data}
          setVisibleDrawer={setVisibleDrawer}
        />
      </main>
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

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: { categories },
  };
}

export default React.memo(Home);

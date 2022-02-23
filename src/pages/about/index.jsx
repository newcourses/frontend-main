import React from 'react';
import Main from '../../layouts/Main';
import useVisibleDrawer from '../../hooks/useVisibleDrawer';
import { ICourseCategories } from '../../propTypes';
import getCategories from '../../controllers/getCategories';

function About({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();

  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <div>About</div>
    </Main>
  );
}

About.propTypes = {
  categories: ICourseCategories,
};

About.defaultProps = {
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

export default React.memo(About);

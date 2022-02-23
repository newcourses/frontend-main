import React from 'react';
import Main from '../../../layouts/Main';
import useVisibleDrawer from '../../../hooks/useVisibleDrawer';
import { ICourseCategories } from '../../../propTypes';
import getCategories from '../../../controllers/getCategories';

function School({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <div>
        <main>404 ERROR</main>
      </div>
    </Main>
  );
}

School.propTypes = {
  categories: ICourseCategories,
};

School.defaultProps = {
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

export default React.memo(School);

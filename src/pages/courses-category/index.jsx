import React from 'react';
import Main from '../../layouts/Main';
import useVisibleDrawer from '../../hooks/useVisibleDrawer';
import getCategories from '../../controllers/getCategories';

function CoursesCategory({ categories }) {
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

export async function getServerSideProps() {
  const categories = await getCategories();

  return {
    props: { categories },
  };
}

export default React.memo(CoursesCategory);

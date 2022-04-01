import React from 'react';
import Main from 'layouts/Main';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';

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
  const categories = await CategoriesServices.getList();

  return {
    props: { categories },
  };
}

export default React.memo(CoursesCategory);

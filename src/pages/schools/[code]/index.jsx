import React from 'react';
import Main from 'layouts/Main';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import SchoolsInfo from 'containers/SchoolsInfo';
import SchoolController from 'controllers/school';

function School({ categories, schools }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <section>
        <SchoolsInfo schools={schools.data} />
      </section>
    </Main>
  );
}

export async function getServerSideProps({ params }) {
  const categories = await CategoriesServices.getList();

  const schools = await SchoolController.getList({
    page: 'all',
    isFree: false,
    schoolCode: params.code,
    isPopulateProducts: true,
    isPopulateQuality: true,
  });

  return {
    props: { categories, schools },
  };
}

export default React.memo(School);

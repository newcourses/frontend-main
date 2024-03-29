import React from 'react';
import Main from 'layouts/Main';
import NAVIGATION from 'library/navigation';
import SchoolList from 'containers/SchoolList';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';
import SchoolController from '../../controllers/school';

const items = [
  { value: 'home', caption: 'Главная', navigation: NAVIGATION.home },
  { value: 'current', caption: 'Школы' },
];

function Schools({ categories, schools }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();

  return (
    <Main
      displayBackTopButton
      categories={categories.data}
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
    >
      <main>
        <section>
          <DynamicBreadcrumb items={items} />
        </section>

        <section>
          <SchoolList data={schools.data} />
        </section>
      </main>
    </Main>
  );
}

export async function getServerSideProps(ctx) {
  const { school } = ctx.query;
  const categories = await CategoriesServices.getList();

  const schools = await SchoolController.getList({
    page: 'all',
    name: { $containsi: school },
    displayLink: { $containsi: school },
  });

  return {
    props: { categories, schools },
  };
}

export default React.memo(Schools);

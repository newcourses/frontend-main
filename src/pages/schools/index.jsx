import React from 'react';
import Main from 'layouts/Main';
import NAVIGATION from 'library/navigation';
import SchoolList from 'containers/SchoolList';
import getSchools from 'controllers/getSchools';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import getCategories from 'controllers/getCategories';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';

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

export async function getServerSideProps() {
  const categories = await getCategories();

  const schools = await getSchools({
    customFields: 'grade',
    pagination: { page: 'all' },
  });
  return {
    props: { categories, schools },
  };
}

export default React.memo(Schools);

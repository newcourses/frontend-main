import React from 'react';
import Main from 'layouts/Main';
import NAVIGATION from 'library/navigation';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';

function Contacts({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  const items = [
    { value: 'home', caption: 'Главная', navigation: NAVIGATION.home },
    { value: 'contacts', caption: 'Контакты' },
  ];
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <section>
        <DynamicBreadcrumb items={items} />
      </section>
      <main>Contacts</main>
    </Main>
  );
}

export async function getServerSideProps() {
  const categories = await CategoriesServices.getList();

  return {
    props: { categories },
  };
}

export default React.memo(Contacts);

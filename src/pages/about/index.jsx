import React from 'react';
import Main from 'layouts/Main';
import NAVIGATION from 'library/navigation';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import getCategories from 'controllers/getCategories';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';

function About({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  const items = [
    { value: 'home', caption: 'Главная', navigation: NAVIGATION.home },
    { value: 'about', caption: 'О нас' },
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
      <div>About</div>
    </Main>
  );
}

export async function getServerSideProps() {
  const categories = await getCategories();

  return {
    props: { categories },
  };
}

export default React.memo(About);

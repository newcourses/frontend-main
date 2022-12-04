import Main from 'layouts/Main';
import React from 'react';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from '../../api/services/categories';

function PromoCodes({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  const title = 'Действующие скидки и акции всех онлайн-школ 2022';
  const description =
    'Здесь мы собираем актуальные акции онлайн-школ с большими скидками. С этими акциями можно сильно сэкономить при покупке курсов';
  return (
    <Main
      title={title}
      description={description}
      categories={categories.data}
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
    >
      <div>
        <main>Скоро!</main>
      </div>
    </Main>
  );
}

export async function getServerSideProps() {
  const categories = await CategoriesServices.getList();

  return {
    props: {
      categories,
    },
  };
}

export default React.memo(PromoCodes);

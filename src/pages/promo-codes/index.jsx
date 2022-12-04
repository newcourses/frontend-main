import Main from 'layouts/Main';
import React from 'react';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import NAVIGATION from 'library/navigation';
import DynamicBreadcrumb from 'components/DynamicBreadcrumb';
import ShowcasePromoCodes from 'containers/ShowcasePromoCodes';
import PromoCodesServices from 'api/services/promo-codes';

function PromoCodes({ categories, promoCodes }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  const title = 'Действующие скидки и акции всех онлайн-школ 2022';
  const description =
    'Здесь мы собираем актуальные акции онлайн-школ с большими скидками. С этими акциями можно сильно сэкономить при покупке курсов';

  const items = [
    { value: 'home', navigation: NAVIGATION.home },
    { value: 'schools', navigation: NAVIGATION.promoCodes },
  ];

  return (
    <Main
      title={title}
      description={description}
      categories={categories.data}
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
    >
      <section>
        <DynamicBreadcrumb items={items} />
      </section>
      <section>
        <ShowcasePromoCodes promoCodes={promoCodes.data} />
      </section>
    </Main>
  );
}

export async function getServerSideProps() {
  const categories = await CategoriesServices.getList();
  const promoCodes = await PromoCodesServices.getList();

  return {
    props: {
      categories,
      promoCodes,
    },
  };
}

export default React.memo(PromoCodes);

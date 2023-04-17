import React from 'react';
import Main from 'layouts/Main';
import MainBanner from 'containers/MainBanner';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import CourseCategories from 'containers/CourseCategories';
import Head from 'next/head';

function Home({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <Head>
        <meta name="verify-admitad" content="28289f10d6" />
        <meta name="yandex-verification" content="09e173153553f555" />
        <meta
          name="google-site-verification"
          content="l0nFA56JuQDY5OIPndVMay3JyXZ3nYIsZc6K8NHD5Gs"
        />
      </Head>
      <main>
        <MainBanner setVisibleDrawer={setVisibleDrawer} />
      </main>
      <section>
        <CourseCategories
          categories={categories.data}
          setVisibleDrawer={setVisibleDrawer}
        />
      </section>
    </Main>
  );
}

export async function getServerSideProps() {
  const categories = await CategoriesServices.getList();
  return {
    props: { categories },
  };
}

export default React.memo(Home);

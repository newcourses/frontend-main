import React from 'react';
import Head from 'next/head';
import DrawerWithCourseCategories from 'components/DrawerWithCourseCategories';
import BackTopButton from 'components/BackTopButton';
import css from './index.module.scss';
import Footer from './components/Footer';
import Header from './components/Header';

function Main({
  title,
  children,
  categories,
  description,
  visibleDrawer,
  setVisibleDrawer,
  displayBackTopButton,
}) {
  return (
    <div className={css.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://newcourses.ru/" />
      </Head>
      {displayBackTopButton && <BackTopButton />}
      <DrawerWithCourseCategories
        visible={visibleDrawer}
        setVisible={setVisibleDrawer}
        categories={categories}
      />
      <Header setVisibleDrawer={setVisibleDrawer} />
      <div className={css.wrapper}>{children}</div>
      <Footer wrapperStyles={{ marginTop: 60 }} />
    </div>
  );
}

export default React.memo(Main);

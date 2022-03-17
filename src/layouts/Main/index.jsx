import React from 'react';
import Footer from './components/Footer';
import css from './index.module.scss';
import Header from './components/Header';
import DrawerWithCourseCategories from '../../components/DrawerWithCourseCategories';

function Main({ children, visibleDrawer, setVisibleDrawer, categories }) {
  return (
    <div className={css.container}>
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

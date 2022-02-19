import React from 'react';
import PropTypes from 'prop-types';
import Footer from './components/Footer';
import css from './index.module.scss';
import Header from './components/Header';
import DrawerWithCourseCategories from '../../components/DrawerWithCourseCategories';
import { ICourseCategoriesData } from '../../propTypes';

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

Main.propTypes = {
  children: PropTypes.element,
  visibleDrawer: PropTypes.bool,
  setVisibleDrawer: PropTypes.func,
  categories: ICourseCategoriesData,
};

Main.defaultProps = {
  children: () => (
    <>Компонент служит как обертка с хедерои и футуреом страницы</>
  ),
  visibleDrawer: false,
  setVisibleDrawer: () => {},
  categories: [],
};

export default React.memo(Main);

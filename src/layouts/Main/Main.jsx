import React from 'react';
import PropTypes from 'prop-types';
import Footer from './components/Footer/Footer';
import css from './Main.module.scss';
import Header from './components/Header/Header';
import DrawerWithCourseCategories from '../../components/DrawerWithCourseCategories/DrawerWithCourseCategories';

function Main({ children, visibleDrawer, setVisibleDrawer }) {
  return (
    <div>
      <DrawerWithCourseCategories
        visible={visibleDrawer}
        setVisible={setVisibleDrawer}
      />
      <Header setVisibleDrawer={setVisibleDrawer} />
      <div className={css.wrapper}>{children}</div>
      <Footer />
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element,
  visibleDrawer: PropTypes.bool,
  setVisibleDrawer: PropTypes.func,
};

Main.defaultProps = {
  children: () => (
    <>Компонент служит как обертка с хедерои и футуреом страницы</>
  ),
  visibleDrawer: false,
  setVisibleDrawer: () => {},
};

export default React.memo(Main);

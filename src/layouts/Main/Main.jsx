import React from 'react';
import PropTypes from 'prop-types';
import Footer from './components/Footer/Footer';
import css from './Main.module.scss';
import Header from './components/Header/Header';

function Main({ children }) {
  return (
    <div>
      <Header />
      <div className={css.wrapper}>{children}</div>
      <Footer />
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.element,
};

Main.defaultProps = {
  children: () => (
    <>Компонент служит как обертка с хедерои м футуреом страницы</>
  ),
};

export default React.memo(Main);

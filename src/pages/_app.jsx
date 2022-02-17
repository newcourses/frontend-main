import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';
import 'moment/locale/ru';
import moment from 'moment';

moment.locale('ru');

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.element.isRequired,
};

export default MyApp;

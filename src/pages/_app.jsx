import '../styles/globals.scss';
import React from 'react';
import PropTypes from 'prop-types';
import 'moment/locale/ru';
import moment from 'moment';
import BackTopButton from '../components/BackTopButton';

moment.locale('ru');

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BackTopButton />
    </>
  );
}

MyApp.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.element.isRequired,
};

export default MyApp;

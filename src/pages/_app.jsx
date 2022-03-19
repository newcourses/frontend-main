import 'styles/globals.scss';
import React from 'react';
import 'moment/locale/ru';
import moment from 'moment';
import BackTopButton from 'components/BackTopButton';

moment.locale('ru');

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <BackTopButton />
    </>
  );
}

export default MyApp;

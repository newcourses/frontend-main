import 'styles/globals.scss';
import React from 'react';
import 'moment/locale/ru';
import moment from 'moment';
import YaMetrika from 'components/YaMetrika';

moment.locale('ru');

function MyApp({ Component, pageProps }) {
  return (
    <>
      <YaMetrika />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

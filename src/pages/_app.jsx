import 'styles/globals.scss';
import React from 'react';
import 'moment/locale/ru';
import moment from 'moment';

moment.locale('ru');

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

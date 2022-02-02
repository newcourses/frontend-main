import '../styles/globals.css';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function changeSize(config) {
  const { baseSize } = config;
  const { baseWidth } = config;
  const { widthLimit } = config;

  const html = document.documentElement;
  let width = html.clientWidth || document.body.clientWidth;
  if (widthLimit) {
    width = Math.min(width, widthLimit);
  }

  const currentSize = (width / baseWidth) * baseSize;
  html.style.fontSize = `${currentSize}px`;
}

const elasticConfig = {
  desktop: {
    baseSize: 10,
    baseWidth: 1440,
    widthLimit: 1660,
  },
};

function useElasticAdaptive(device) {
  useEffect(() => {
    const update = () => changeSize(elasticConfig[device]);

    update();
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('resize', update);
    };
  }, [device]);
}

function MyApp({ Component, pageProps }) {
  useElasticAdaptive('desktop');
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.element.isRequired,
};

export default MyApp;

import React from 'react';
import PropTypes from 'prop-types';
import { FormOutlined, HeartOutlined } from '@ant-design/icons';
import css from './index.module.scss';
import ClockBlock from './ClockBlock';
import ContentItem from './ContentItem';

function Content({ start, duration, format, peculiarities }) {
  return (
    <div className={css.wrapper}>
      <ClockBlock duration={duration} start={start} />
      <ContentItem icon={FormOutlined} prefixText="Формат" infoText={format} />
      <ContentItem
        icon={HeartOutlined}
        prefixText="Особенности"
        infoText={peculiarities}
      />
    </div>
  );
}

Content.propTypes = {
  start: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  peculiarities: PropTypes.string.isRequired,
};

export default React.memo(Content);

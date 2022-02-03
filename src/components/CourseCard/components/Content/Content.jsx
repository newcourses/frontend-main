import React from 'react';
import PropTypes from 'prop-types';
import { FormOutlined, HeartOutlined } from '@ant-design/icons';
import css from './Content.module.scss';
import ClockBlock from './ClockBlock/ClockBlock';
import ContentItem from './ContentItem/ContentItem';

function Content({ start, duration, formatLessons, peculiarities }) {
  return (
    <div className={css.wrapper}>
      <ClockBlock duration={duration} start={start} />
      <ContentItem
        icon={FormOutlined}
        prefixText="Формат"
        infoText={formatLessons}
      />
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
  formatLessons: PropTypes.string.isRequired,
  peculiarities: PropTypes.string.isRequired,
};

export default React.memo(Content);

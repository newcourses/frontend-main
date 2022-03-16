import React from 'react';
import PropTypes from 'prop-types';
import { FormOutlined, HeartOutlined } from '@ant-design/icons';
import css from './index.module.scss';
import ClockBlock from './ClockBlock';
import ContentItem from './ContentItem';

function Content({ start, duration, durationUnit, format, params }) {
  return (
    <div className={css.wrapper}>
      <ClockBlock
        duration={duration}
        durationUnit={durationUnit}
        start={start}
      />
      <ContentItem icon={FormOutlined} prefixText="Формат" infoText={format} />
      <ContentItem
        icon={HeartOutlined}
        prefixText="Особенности"
        params={params}
      />
    </div>
  );
}

Content.propTypes = {
  start: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  durationUnit: PropTypes.string.isRequired,
  params: PropTypes.arrayOf({
    name: PropTypes.string,
    value: PropTypes.string,
    unit: PropTypes.string,
  }),
};

Content.defaultProps = {
  params: [],
};

export default React.memo(Content);

import React from 'react';
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

export default React.memo(Content);

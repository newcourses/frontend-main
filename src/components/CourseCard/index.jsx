import React from 'react';
import { Card } from 'antd';
import css from './index.module.scss';
import Content from './components/Content';
import CardHeader from './components/CardHeader';
import ActionButton from './components/ActionButton';
import { ICourseCard } from '../../propTypes';

function CourseCard({
  title,
  start,
  format,
  duration,
  schoolInfo,
  peculiarities,
}) {
  return (
    <Card
      className={css.wrapper}
      title={<CardHeader schoolInfo={schoolInfo} title={title} />}
      actions={[<ActionButton link="/" name={schoolInfo.mainLink} />]}
    >
      <Content
        start={start}
        duration={duration}
        format={format}
        peculiarities={peculiarities}
      />
    </Card>
  );
}

CourseCard.propTypes = {
  ...ICourseCard.isRequired,
};

export default React.memo(CourseCard);

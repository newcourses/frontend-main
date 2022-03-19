import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Duration } from 'components/CoursesTableCells';
import css from '../ContentItem/index.module.scss';

function ClockBlock({ start, unit, duration }) {
  let textInfo;
  if (start && duration) {
    textInfo = (
      <span>
        <b>Начало: </b> {start}, <b>продолжительность: </b>
        <Duration duration={duration} unit={unit} />
      </span>
    );
  } else if (start) {
    textInfo = (
      <span>
        <b>Начало: </b> {start}
      </span>
    );
  } else if (duration) {
    textInfo = (
      <span>
        <b>Продолжительность: </b>
        <Duration duration={duration} unit={unit} />
      </span>
    );
  }

  return (
    <div className={css.item}>
      <div>
        <ClockCircleOutlined className={css.icon} />
      </div>
      <div>{textInfo}</div>
    </div>
  );
}

export default React.memo(ClockBlock);

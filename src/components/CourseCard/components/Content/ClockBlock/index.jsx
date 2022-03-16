import React from 'react';
import PropTypes from 'prop-types';
import { ClockCircleOutlined } from '@ant-design/icons';
import css from '../ContentItem/index.module.scss';
import Duration from '../../../../CoursesTableCells/Duration';

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

ClockBlock.propTypes = {
  unit: PropTypes.string,
  start: PropTypes.string,
  duration: PropTypes.string,
};

ClockBlock.defaultProps = {
  start: 'В любой момент',
  duration: 'Без ограничений',
  unit: 'month',
};

export default React.memo(ClockBlock);

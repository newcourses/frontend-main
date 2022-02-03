import React from 'react';
import PropTypes from 'prop-types';
import { ClockCircleOutlined } from '@ant-design/icons';
import css from '../ContentItem/ContentItem.module.scss';

function ClockBlock({ start, duration }) {
  let textInfo;
  if (start && duration) {
    textInfo = (
      <span>
        <b>Начало: </b> {start}, <b>продолжительность: </b> {duration}
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
        <b>Продолжительность: </b> ${duration}
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
  start: PropTypes.string,
  duration: PropTypes.string,
};

ClockBlock.defaultProps = {
  start: 'В любой момент',
  duration: 'Без ограничений',
};

export default React.memo(ClockBlock);

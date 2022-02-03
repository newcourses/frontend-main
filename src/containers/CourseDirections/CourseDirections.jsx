import React from 'react';
import PropTypes from 'prop-types';
import css from './CourseDirections.module.scss';
import DirectionCard from '../../components/DirectionCard/DirectionCard';

function CourseDirections({ directions }) {
  return (
    <div className={css.container}>
      <h2 className={css.mainTitle}>Направления курсов</h2>
      <div className={css.wrapperList}>
        {directions.map((direction) => (
          <DirectionCard
            title={direction.title}
            subDirection={direction.subDirection}
            handler={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

CourseDirections.propTypes = {
  directions: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    subDirections: PropTypes.arrayOf({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default React.memo(CourseDirections);

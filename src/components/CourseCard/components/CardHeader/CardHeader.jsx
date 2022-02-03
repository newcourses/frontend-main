import React from 'react';
import PropTypes from 'prop-types';
import css from './CardHeader.module.scss';
import PriceBlock from './PriceBlock/PriceBlock';
import AboutSchool from './AboutSchool/AboutSchool';

function CardHeader({ title, schoolInfo, rating }) {
  return (
    <div className={css.component}>
      <h2 className={css.title}>{title}</h2>

      <AboutSchool
        link={schoolInfo.link}
        name={schoolInfo.name}
        rating={rating}
      />

      <div className={css.wrapperPrice}>
        <PriceBlock type="total" price={1000} />
        <PriceBlock type="installment" price={10} />
      </div>
    </div>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  schoolInfo: PropTypes.shape({
    link: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  rating: PropTypes.number.isRequired,
};

export default React.memo(CardHeader);

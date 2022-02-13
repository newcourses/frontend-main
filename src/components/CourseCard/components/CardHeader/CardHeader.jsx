import React from 'react';
import PropTypes from 'prop-types';
import css from './CardHeader.module.scss';
import PriceBlock from './PriceBlock/PriceBlock';
import AboutSchool from '../../../AboutSchool/AboutSchool';
import { SchoolInfo } from '../../../../propTypes';

function CardHeader({ title, schoolInfo }) {
  return (
    <div className={css.component}>
      <h2 className={css.title}>{title}</h2>

      <AboutSchool
        value={schoolInfo.value}
        link={schoolInfo.link}
        name={schoolInfo.name}
        rating={schoolInfo.rating}
        countReviews={schoolInfo.countReviews}
        wrapperStyles={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '2rem',
        }}
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
  schoolInfo: SchoolInfo.isRequired,
};

export default React.memo(CardHeader);

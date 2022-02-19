import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import PriceBlock from './PriceBlock';
import AboutSchool from '../../../AboutSchool';
import { ISchoolInfo } from '../../../../propTypes';

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
        wrapperStyles={css.aboutSchool}
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
  schoolInfo: ISchoolInfo.isRequired,
};

export default React.memo(CardHeader);

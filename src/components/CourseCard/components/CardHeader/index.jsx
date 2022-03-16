import React from 'react';
import PropTypes from 'prop-types';
import css from './index.module.scss';
import PriceBlock from './PriceBlock';
import AboutSchool from '../../../AboutSchool';
import { ISchoolAttributes } from '../../../../propTypes';

function CardHeader({ price, creditPayment, title, schoolInfo }) {
  return (
    <div className={css.component}>
      <h2 className={css.title}>{title}</h2>

      <AboutSchool
        value={schoolInfo?.value}
        link={schoolInfo?.mainLink}
        name={schoolInfo?.name}
        grade={schoolInfo?.grade}
        countReviews={schoolInfo?.countReviews}
        wrapperStyles={css.aboutSchool}
      />

      <div className={css.wrapperPrice}>
        <PriceBlock type="total" price={price} />
        <PriceBlock type="installment" price={creditPayment} />
      </div>
    </div>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  creditPayment: PropTypes.number.isRequired,
  schoolInfo: ISchoolAttributes,
};

CardHeader.defaultProps = {
  schoolInfo: {},
};

export default React.memo(CardHeader);

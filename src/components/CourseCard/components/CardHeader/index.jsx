import React from 'react';
import AboutSchool from 'components/AboutSchool';
import css from './index.module.scss';
import PriceBlock from './PriceBlock';

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

export default React.memo(CardHeader);

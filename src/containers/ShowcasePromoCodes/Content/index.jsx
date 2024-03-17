import React from 'react';
import PromoCodeCard from './PromoCodeCard';
import css from './index.module.scss';

function Content({ promoCodes }) {
  return (
    <div className={css.wrapperList}>
      {promoCodes?.map((promoCode) => (
        <PromoCodeCard
          key={promoCode.id}
          name={promoCode.name}
          landing={promoCode.landing}
          offerName={promoCode.offer_name}
          promotion={promoCode.promotion}
          description={promoCode.description}
          dateStart={promoCode.date_start}
          dateEnd={promoCode.date_end}
        />
      ))}
    </div>
  );
}

export default React.memo(Content);

import React from 'react';
import cn from 'classnames';
import { Anchor } from 'antd';
import PageSizeSelect from 'components/PageSizeSelect';
import css from './index.module.scss';
import SortReviews from './SortReviews';

const REVIEWS_HREF = '#review';

function SettingsSearch({ setSort, setPageSize }) {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <SortReviews setSort={setSort} />
        <PageSizeSelect
          setPageSize={setPageSize}
          wrapperStyle={css.wrapperPageSizeSelect}
        />
      </div>
      <Anchor affix={false} activeLink={null}>
        <Anchor.Link
          href={REVIEWS_HREF}
          title={
            <span className={cn(css.button, css.sendReview)}>
              Оставить отзыв
            </span>
          }
        />
      </Anchor>
    </div>
  );
}

export default React.memo(SettingsSearch);

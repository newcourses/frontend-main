import React from 'react';
import cn from 'classnames';
import css from './index.module.scss';
import PageSizeSelect from '../../../../components/PageSizeSelect';
import SortReviews from './SortReviews';

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
      <button className={cn(css.button, css.sendReview)}>Оставить отзыв</button>
    </div>
  );
}

export default React.memo(SettingsSearch);

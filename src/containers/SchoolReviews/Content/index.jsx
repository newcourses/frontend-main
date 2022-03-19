import React from 'react';
import { Button } from 'antd';
import css from './index.module.scss';
import Review from './Review';
import SettingsSearch from './SettingsSearch';
import useLoadReviews from './useLoadReviews';
import AffixBlock from './AffixBlock';

function Content({
  school,
  reviews,
  categories,
  otherSchools,
  setVisibleDrawer,
}) {
  const {
    page,
    setPage,
    setSortType,
    setPageSize,
    reviews: arrayReviews,
  } = useLoadReviews({
    initReviews: reviews,
  });

  return (
    <section className={css.wrapper}>
      <AffixBlock
        school={school}
        categories={categories}
        otherSchools={otherSchools}
        setVisibleDrawer={setVisibleDrawer}
      />
      <div>
        <SettingsSearch setSort={setSortType} setPageSize={setPageSize} />

        {arrayReviews.map((elem) => (
          <Review key={elem.id} {...elem.attributes} reviewId={elem.id} />
        ))}

        <Button
          id="review"
          onClick={() => setPage(page + 1)}
          type="primary"
          size="large"
          className={css.button}
        >
          Еще отзывы
        </Button>
      </div>
    </section>
  );
}

export default React.memo(Content);

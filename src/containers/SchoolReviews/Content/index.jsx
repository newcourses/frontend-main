import React from 'react';
import { Button } from 'antd';
import Review from './Review';
import AffixBlock from './AffixBlock';
import css from './index.module.scss';
import LeaveFeedback from './LeaveFeedback';
import useLoadReviews from './useLoadReviews';
import SettingsSearch from './SettingsSearch';

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
    schoolCode: school.attributes.code,
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
          size="large"
          type="primary"
          className={css.button}
          onClick={() => setPage(page + 1)}
        >
          Еще отзывы
        </Button>

        <LeaveFeedback
          schoolId={school.id}
          schoolName={school.attributes.name}
        />
      </div>
    </section>
  );
}

export default React.memo(Content);

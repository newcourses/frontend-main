import React from 'react';
import { Button } from 'antd';
import css from './index.module.scss';
import Review from './Review';
import { ISchoolReviews } from '../../../propTypes';
import SettingsSearch from './SettingsSearch';
import useLoadReviews from './useLoadReviews';
import AffixBlock from './AffixBlock';

function Content({ reviews }) {
  const {
    reviews: arrayReviews,
    setPageSize,
    setSortType,
    setPage,
    page,
  } = useLoadReviews({
    initReviews: reviews,
  });

  return (
    <section className={css.wrapper}>
      <AffixBlock />
      <div>
        <SettingsSearch setSort={setSortType} setPageSize={setPageSize} />

        {arrayReviews.map((elem) => (
          <Review key={elem.id} {...elem.attributes} />
        ))}

        <Button
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

Content.propTypes = {
  reviews: ISchoolReviews,
};
Content.defaultProps = {
  reviews: {
    data: [],
    meta: {},
  },
};

export default React.memo(Content);

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Affix, Button } from 'antd';
import css from './index.module.scss';
import Review from './Review';
import { ISchoolReviews } from '../../../propTypes';

function Content({ reviews }) {
  const [top, setTop] = useState(10);
  const [arrayReviews, setArrayReviews] = useState(reviews.data);

  return (
    <section className={css.wrapper}>
      <Affix className={css.affixBlock} offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <div>
        {arrayReviews.map((elem) => (
          <Review key={elem.id} {...elem.attributes} />
        ))}
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

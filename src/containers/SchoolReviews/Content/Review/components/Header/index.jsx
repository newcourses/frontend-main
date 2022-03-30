import React from 'react';
import CustomRate from 'components/CustomRate';
import { ClockCircleOutlined } from '@ant-design/icons';
import css from './index.module.scss';

function Header({ date, name, grade, schoolName }) {
  return (
    <div className={css.wrapper}>
      <div
        itemProp="itemReviewed"
        itemScope
        itemType="https://schema.org/MediaObject"
      >
        <meta itemProp="name" content={schoolName} />
      </div>
      <CustomRate
        itemProp="reviewRating"
        grade={grade.toFixed(1)}
        wrapperStyle={css.wrapCustomRate}
      />
      <div className={css.personalData}>
        <ClockCircleOutlined />
        <span className={css.indent} itemProp="dateCreated">
          {date}
        </span>
        <span className={css.indent} itemProp="author">
          {name}
        </span>
      </div>
    </div>
  );
}

export default React.memo(Header);

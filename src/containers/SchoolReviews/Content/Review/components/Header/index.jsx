import React from 'react';
import CustomRate from 'components/CustomRate';
import { ClockCircleOutlined } from '@ant-design/icons';
import css from './index.module.scss';

function Header({ date, name, grade }) {
  return (
    <div className={css.wrapper}>
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

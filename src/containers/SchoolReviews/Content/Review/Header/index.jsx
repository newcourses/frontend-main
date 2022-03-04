import React from 'react';
import PropTypes from 'prop-types';
import { ClockCircleOutlined } from '@ant-design/icons';
import css from './index.module.scss';
import CustomRate from '../../../../../components/CustomRate';

function Header({ date, name, grade }) {
  return (
    <div className={css.wrapper}>
      <CustomRate rating={grade.toFixed(1)} wrapperStyle={css.wrapCustomRate} />
      <div className={css.personalData}>
        <ClockCircleOutlined />
        <span className={css.indent}>{date}</span>
        <span className={css.indent}>{name}</span>
      </div>
    </div>
  );
}

Header.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
};
Header.defaultProps = {};

export default React.memo(Header);

import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import Logo from '../../../Logo';
import css from './index.module.scss';
import CustomRate from '../../../CustomRate';
import { IDataImage } from '../../../../propTypes';
import { declOfNumReviews } from '../../../../helpers';
import NAVIGATION from '../../../../library/navigation';

function Header({ logo, mainLink, value, countReviews }) {
  return (
    <div className={css.wrapper}>
      <div className={css.item}>
        <Logo logo={logo} isNewWind />
        <a
          className={css.link}
          href={`https://${mainLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {mainLink}
        </a>
      </div>
      <div className={css.item}>
        <CustomRate rating={countReviews} />
        <Button
          className={css.button}
          type="primary"
          href={NAVIGATION.schoolReview.as(value)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {declOfNumReviews(countReviews, true)}
        </Button>
      </div>
    </div>
  );
}

Header.propTypes = {
  logo: IDataImage,
  value: PropTypes.string.isRequired,
  mainLink: PropTypes.string.isRequired,
  countReviews: PropTypes.number.isRequired,
};
Header.defaultProps = {
  logo: {},
};

export default React.memo(Header);

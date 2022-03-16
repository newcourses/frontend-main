import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import css from './index.module.scss';
import { declOfNumReviews } from '../../helpers';
import { ISchoolAttributes } from '../../propTypes';
import CustomRate from '../CustomRate';

function AboutSchool({
  link,
  name,
  value,
  grade,
  countReviews,
  wrapperStyles,
}) {
  return (
    <div className={cn(css.aboutSchool, wrapperStyles)}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={css.name}
      >
        {name}
      </a>
      <CustomRate grade={grade} />
      <a className={css.reviews} href={`/${value}`}>
        {declOfNumReviews(countReviews, true)} о школе
      </a>
    </div>
  );
}

AboutSchool.propTypes = {
  ...ISchoolAttributes,
  wrapperStyles: PropTypes.string,
};

AboutSchool.defaultProps = {
  wrapperStyles: '',
};

export default React.memo(AboutSchool);

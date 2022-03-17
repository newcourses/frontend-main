import React from 'react';
import cn from 'classnames';
import css from './index.module.scss';
import { declOfNumReviews } from '../../helpers';
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

export default React.memo(AboutSchool);

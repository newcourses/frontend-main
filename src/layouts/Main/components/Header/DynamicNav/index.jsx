import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import cn from 'classnames';
import css from './index.module.scss';

function DynamicNav({ links }) {
  return (
    <ul className={css.linksContainer}>
      {links.map((navElement) => (
        <li>
          <Link href={navElement.link}>
            <a className={cn(css.linkWrapper, css.link)}>
              {navElement.caption}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

DynamicNav.propTypes = {
  links: PropTypes.arrayOf({
    link: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  }),
};
DynamicNav.defaultProps = {
  links: [],
};

export default React.memo(DynamicNav);

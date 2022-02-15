import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { DownOutlined } from '@ant-design/icons';
import css from './CategoriesCard.module.scss';
import { ICourseSubcategories } from '../../propTypes';
import NAVIGATION from '../../library/navigation';

function CategoriesCard({ caption, subcategories, handler }) {
  return (
    <div className={css.wrapper}>
      <h2>{caption}</h2>
      <nav>
        <ul>
          {subcategories.data.slice(0, 4).map(({ id, attributes }) => (
            <li key={id}>
              <Link
                href={NAVIGATION.coursesCategory.link}
                as={NAVIGATION.coursesCategory.as(id)}
              >
                <a className={css.link}>{attributes.caption}</a>
              </Link>
            </li>
          ))}
          <li>
            <button type="button" className={css.button} onClick={handler}>
              Развернуть все
              <DownOutlined style={{ marginLeft: '1rem' }} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

CategoriesCard.propTypes = {
  caption: PropTypes.string.isRequired,
  subcategories: ICourseSubcategories.isRequired,
  handler: PropTypes.func.isRequired,
};

export default React.memo(CategoriesCard);
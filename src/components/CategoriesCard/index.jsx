import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { DownOutlined } from '@ant-design/icons';
import css from './index.module.scss';
import NAVIGATION from '../../library/navigation';
import { ICourseSubCategories } from '../../propTypes';

function CategoriesCard({ caption, subcategories, handler }) {
  return (
    <div className={css.wrapper}>
      <h2 className={css.caption}>{caption}</h2>
      <nav>
        <ul>
          {subcategories.data.slice(0, 4).map(({ id, attributes }) => (
            <li key={id}>
              <Link
                href={NAVIGATION.coursesCategory.link}
                as={NAVIGATION.coursesCategory.as(attributes.code)}
              >
                <a className={css.link}>{attributes.caption}</a>
              </Link>
            </li>
          ))}
          <li>
            <button type="button" className={css.button} onClick={handler}>
              Развернуть все
              <DownOutlined style={{ marginLeft: '10px' }} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

CategoriesCard.propTypes = {
  caption: PropTypes.string.isRequired,
  subcategories: ICourseSubCategories.isRequired,
  handler: PropTypes.func.isRequired,
};

export default React.memo(CategoriesCard);

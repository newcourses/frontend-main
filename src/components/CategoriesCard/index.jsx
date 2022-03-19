import React from 'react';
import Link from 'next/link';
import NAVIGATION from 'library/navigation';
import { DownOutlined } from '@ant-design/icons';
import css from './index.module.scss';

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

export default React.memo(CategoriesCard);

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import css from './index.module.scss';

function Categories({ categories, setVisibleDrawer }) {
  return (
    <>
      <p className={css.title}>Сравниваем все курсы школ по:</p>
      <p>
        {categories.map((category) => (
          <span
            tabIndex={0}
            role="button"
            className={css.category}
            onClick={() => setVisibleDrawer(true)}
          >
            <span key={category.id}>{category.attributes.caption}</span>
            <DownOutlined style={{ marginLeft: '5px' }} />
          </span>
        ))}
      </p>
    </>
  );
}

export default React.memo(Categories);

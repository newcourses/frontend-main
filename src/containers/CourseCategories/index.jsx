import React from 'react';
import CategoriesCard from 'components/CategoriesCard';
import css from './index.module.scss';

function CourseCategories({ categories, setVisibleDrawer, title, type }) {
  return (
    <div>
      <h2 className={css.mainTitle}>{title}</h2>
      <div className={css.wrapperList}>
        {categories.map(({ id, attributes }) => (
          <CategoriesCard
            key={id}
            type={type}
            category={attributes.code}
            handler={setVisibleDrawer}
            caption={attributes.caption}
            subcategories={attributes.subcategories}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(CourseCategories);

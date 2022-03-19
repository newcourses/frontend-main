import React from 'react';
import CategoriesCard from 'components/CategoriesCard';
import css from './index.module.scss';

function CourseCategories({ categories, setVisibleDrawer }) {
  return (
    <div className={css.container}>
      <h2 className={css.mainTitle}>Направления курсов</h2>
      <div className={css.wrapperList}>
        {categories.map(({ id, attributes }) => (
          <CategoriesCard
            key={id}
            caption={attributes.caption}
            subcategories={attributes.subcategories}
            handler={setVisibleDrawer}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(CourseCategories);

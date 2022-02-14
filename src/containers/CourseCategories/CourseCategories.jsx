import React from 'react';
import css from './CourseCategories.module.scss';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import { ICourseCategories } from '../../propTypes';

function CourseCategories({ categories }) {
  return (
    <div className={css.container}>
      <h2 className={css.mainTitle}>Направления курсов</h2>
      <div className={css.wrapperList}>
        {categories.map(({ id, attributes }) => (
          <CategoriesCard
            key={id}
            caption={attributes.caption}
            subcategories={attributes.subcategories}
            handler={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

CourseCategories.propTypes = {
  categories: ICourseCategories,
};

CourseCategories.defaultProps = {
  categories: [],
};

export default React.memo(CourseCategories);

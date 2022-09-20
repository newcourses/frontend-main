import React, { useCallback, useState } from 'react';
import Main from 'layouts/Main';
import useVisibleDrawer from 'hooks/useVisibleDrawer';
import CategoriesServices from 'api/services/categories';
import DrawerOneCategory from 'components/DrawerOneCategory';
import CourseCategories from 'containers/CourseCategories';
import css from './index.module.scss';

function FreeCoursesCategories({ categories }) {
  const {
    visibleDrawer: visibleMainDrawer,
    setVisibleDrawer: setVisibleMainDrawer,
  } = useVisibleDrawer();

  const [currentCategory, setCurrentCategory] = useState(null);
  const handlerOpenAllSubcategories = useCallback(
    (e) => {
      const currentCode = e.target.dataset.code;
      const selectedCategories = categories.data.find(
        ({ attributes }) => attributes.code === currentCode,
      );
      setCurrentCategory(selectedCategories);
    },
    [categories.data],
  );

  const closeDrawer = useCallback(() => {
    setCurrentCategory(null);
  }, []);

  return (
    <Main
      visibleDrawer={visibleMainDrawer}
      setVisibleDrawer={setVisibleMainDrawer}
      categories={categories.data}
    >
      <DrawerOneCategory
        category={currentCategory}
        closeDrawer={closeDrawer}
        type="freeCoursesCategory"
      />

      <section className={css.container}>
        <CourseCategories
          type="freeCoursesCategory"
          title="Бесплатные курсы по направлениям:"
          categories={categories.data}
          setVisibleDrawer={handlerOpenAllSubcategories}
        />
      </section>
    </Main>
  );
}

export async function getServerSideProps() {
  const categories = await CategoriesServices.getList();
  return {
    props: { categories },
  };
}

export default React.memo(FreeCoursesCategories);

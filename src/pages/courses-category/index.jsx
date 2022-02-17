import React from 'react';
import Link from 'next/link';
import Main from '../../layouts/Main/Main';
import useVisibleDrawer from '../../hooks/useVisibleDrawer';
import { ICourseCategories } from '../../propTypes';
import getCategories from '../../controllers/getCategories';

function CoursesCategory({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <div>
        <main>
          404 ERROR
          <Link href="/courses-category/test-test" passHref>
            <a>go to category</a>
          </Link>
        </main>
      </div>
    </Main>
  );
}

CoursesCategory.propTypes = {
  categories: ICourseCategories,
};

CoursesCategory.defaultProps = {
  categories: {
    data: [],
  },
};

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: { categories },
  };
}

export default React.memo(CoursesCategory);

import React from 'react';
import Main from '../../../../layouts/Main';
import { ICourseCategories } from '../../../../propTypes';
import useVisibleDrawer from '../../../../hooks/useVisibleDrawer';
import getCategories from '../../../../controllers/getCategories';

function SchoolReviews({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      test test
    </Main>
  );
}

SchoolReviews.propTypes = {
  categories: ICourseCategories,
};

SchoolReviews.defaultProps = {
  categories: {
    data: [],
  },
};

export async function getServerSideProps() {
  const categories = await getCategories();

  return {
    props: { categories },
  };
}

export default React.memo(SchoolReviews);

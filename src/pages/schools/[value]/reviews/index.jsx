import React from 'react';
import { useRouter } from 'next/router';
import Main from '../../../../layouts/Main';
import { ICourseCategories } from '../../../../propTypes';
import useVisibleDrawer from '../../../../hooks/useVisibleDrawer';
import getCategories from '../../../../controllers/getCategories';

function SchoolReviews({ categories }) {
  const router = useRouter();
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

export async function getServerSideProps({ params }) {
  console.log(params);
  const categories = await getCategories();

  return {
    props: { categories },
  };
}

export default React.memo(SchoolReviews);

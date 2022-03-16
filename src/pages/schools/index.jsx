import React from 'react';
import Main from '../../layouts/Main';
import { ICourseCategories, ISchools } from '../../propTypes';
import useVisibleDrawer from '../../hooks/useVisibleDrawer';
import getCategories from '../../controllers/getCategories';
import SchoolList from '../../containers/SchoolList';
import getSchools from '../../controllers/getSchools';

function Schools({ categories, schools }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <main>
        <SchoolList data={schools.data} />
      </main>
    </Main>
  );
}

Schools.propTypes = {
  categories: ICourseCategories,
  schools: ISchools,
};

Schools.defaultProps = {
  categories: {
    data: [],
  },
  schools: {
    data: [],
  },
};

export async function getServerSideProps() {
  const categories = await getCategories();

  const schools = await getSchools({
    customFields: 'grade',
    pagination: { page: 'all' },
  });
  return {
    props: { categories, schools },
  };
}

export default React.memo(Schools);

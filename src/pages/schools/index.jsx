import React from 'react';
import Main from '../../layouts/Main';
import { ICourseCategories, ISchools } from '../../propTypes';
import useVisibleDrawer from '../../hooks/useVisibleDrawer';
import getCategories from '../../controllers/getCategories';
import SchoolList from '../../containers/SchoolList';
// import schools from './schools.json';
import getSchools from '../../controllers/getSchools';

/* [
  '{{repeat(30, 30)}}',
  {

    logo: {
      src: '/_next/static/media/logo-dark.d3afc38c.png'
    },
    value: function (tags) {
        var str = tags.lorem(tags.integer(1, 3), 'words');
        return str.split(' ').join('-');
      },
    mainLink: function (tags) {
          var domenZones = ['ru', 'com', 'io'];
          return this.value + '.' + domenZones[tags.integer(0, domenZones.length - 1)];
        },
    description: function (tags) {
        var str = tags.lorem(tags.integer(7, 15), 'words');
        return str[0].toUpperCase() + str.slice(1);
      },
    countReviews: '{{integer(10, 999)}}'
   }
]
* */

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

  const schools = await getSchools({ pagination: { page: 'all' } });
  return {
    props: { categories, schools },
  };
}

export default React.memo(Schools);

import React from 'react';
import Main from '../../layouts/Main';
import { ICourseCategories } from '../../propTypes';
import useVisibleDrawer from '../../hooks/useVisibleDrawer';
import getCategories from '../../controllers/getCategories';
import SchoolList from '../../containers/SchoolList';
import schools from './schools.json';

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

function Schools({ categories }) {
  const { visibleDrawer, setVisibleDrawer } = useVisibleDrawer();
  return (
    <Main
      visibleDrawer={visibleDrawer}
      setVisibleDrawer={setVisibleDrawer}
      categories={categories.data}
    >
      <main>
        <SchoolList data={schools} />
      </main>
    </Main>
  );
}

Schools.propTypes = {
  categories: ICourseCategories,
};

Schools.defaultProps = {
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

export default React.memo(Schools);

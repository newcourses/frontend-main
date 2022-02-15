import React, { useState } from 'react';
import qs from 'qs';
import PropTypes from 'prop-types';
import Main from '../layouts/Main/Main';
import CourseCategories from '../containers/CourseCategories/CourseCategories';
import { api } from '../utils/axiosInstances';
import { ICourseCategories } from '../propTypes';
import MainBanner from '../containers/MainBanner/MainBanner';

function Home({ data }) {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  return (
    <Main visibleDrawer={visibleDrawer} setVisibleDrawer={setVisibleDrawer}>
      <main>
        <MainBanner setVisibleDrawer={setVisibleDrawer} />
        <CourseCategories
          categories={data}
          setVisibleDrawer={setVisibleDrawer}
        />
      </main>
    </Main>
  );
}

Home.propTypes = {
  data: PropTypes.arrayOf(ICourseCategories.isRequired),
};

Home.defaultProps = {
  data: [],
};

export async function getStaticProps() {
  const query = qs.stringify(
    { populate: ['subcategories'] },
    { encodeValuesOnly: true },
  );

  const { data } = await api.get(`/categories?${query}`);

  return {
    props: data,
  };
}

export default React.memo(Home);

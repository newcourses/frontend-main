import React from 'react';
import qs from 'qs';
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.css';
import Main from '../layouts/Main/Main';
import CourseCategories from '../containers/CourseCategories/CourseCategories';
import { api } from '../utils/axiosInstances';
import { ICourseCategories } from '../propTypes';

function Home({ data }) {
  return (
    <Main>
      <main className={styles.main}>
        <CourseCategories categories={data} />
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

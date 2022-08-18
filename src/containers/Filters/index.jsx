import React from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import SearchHandler from 'utils/SearchHandler';
import css from './index.module.scss';
import FilterForm from './components/FilterForm';

function Filters({ categories }) {
  const location = useRouter();
  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={{
          ...SearchHandler.parse(location.query),
        }}
        onSubmit={() => {
          location.reload();
        }}
      >
        {(form) => <FilterForm form={form} categories={categories} />}
      </Formik>
    </div>
  );
}

export default React.memo(Filters);

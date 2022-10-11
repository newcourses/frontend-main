import React from 'react';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import SearchHandler from 'utils/SearchHandler';
import css from './index.module.scss';
import FiltersForm from './FiltersForm';

function Filters() {
  const location = useRouter();

  return (
    <>
      <div className={css.title}>Поиск по школам</div>
      <Formik
        initialValues={{
          ...SearchHandler.parse(location.query),
        }}
        onSubmit={() => {}}
        component={FiltersForm}
      />
    </>
  );
}

export default React.memo(Filters);

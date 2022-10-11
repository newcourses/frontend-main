import React from 'react';
import { Form } from 'formik';
import { FormGroup } from 'components/CustomFields';
import useDebouncedEffect from 'hooks/useDebouncedEffect';
import SearchHandler from 'utils/SearchHandler';
import { useRouter } from 'next/router';
import css from '../index.module.scss';

function FiltersForm({ values }) {
  const location = useRouter();

  useDebouncedEffect(
    async () => {
      const searchParams = SearchHandler.stringify(values);
      await location.replace({ search: searchParams });
    },
    [values],
    500,
  );

  return (
    <Form className={css.formWrapper}>
      <div className={css.wrapper}>
        <FormGroup
          name="school"
          placeholder="Введите название школы:"
          wrapperStyle={{ width: '300px' }}
        />
      </div>
    </Form>
  );
}

export default React.memo(FiltersForm);

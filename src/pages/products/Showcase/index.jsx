import React, { useCallback, useState } from 'react';
import CourseCard from 'components/CourseCard';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import SearchHandler from 'utils/SearchHandler';
import ProductController from 'controllers/product';
import css from './index.module.scss';
import FilterForm from './FilterForm';

function Showcase({ title, categories, cardsPagination, cards: initCards }) {
  const [pageCount, setPageCount] = useState(cardsPagination.pageCount);
  const [cards, setCards] = useState(initCards);
  const location = useRouter();

  const onSubmit = useCallback(async (values, actions) => {
    actions.setFieldValue('page', 1);
    const products = await ProductController.getList(
      { ...values, page: 1 },
      'requestFront',
    );
    setCards(products.data);
    setPageCount(products.meta.pagination.pageCount);
  }, []);

  const nextPage = useCallback(async (form) => {
    const newPage = form.values.page + 1;
    form.setFieldValue('page', newPage);
    const products = await ProductController.getList(
      { ...form.values, page: newPage },
      'requestFront',
    );
    setCards((prevState) => [...prevState, ...products.data]);
  }, []);

  const initValues = SearchHandler.parse(location.query);
  return (
    <div className={css.container}>
      <Formik
        initialValues={{
          ...initValues,
          page: Number(initValues.page || 1),
        }}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {(form) => {
          return (
            <>
              <FilterForm form={form} categories={categories} />
              <h3 className={css.title}>{title}</h3>
              <div className={css.wrapperList}>
                {cards.map(({ id, attributes }) => (
                  <CourseCard key={id} {...attributes} />
                ))}
              </div>
              {pageCount > form.values.page && (
                <Button
                  size="large"
                  type="primary"
                  className={css.button}
                  onClick={() => nextPage(form)}
                >
                  Ещё
                </Button>
              )}
            </>
          );
        }}
      </Formik>
    </div>
  );
}

export default React.memo(Showcase);

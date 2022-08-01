import React, { useMemo } from 'react';
import { Formik, Form } from 'formik';
// import qs from 'qs';
import { useRouter } from 'next/router';
import css from './index.module.scss';
import {
  FormGroup,
  Select,
  SelectWithGroups,
  Slider,
} from '../../components/CustomFields';

const prepareCategories = (categories) => () => {
  const response = { subcategoriesList: {} };
  response.categoriesList = categories.map(({ attributes }) => {
    response.subcategoriesList[attributes.caption] =
      attributes.subcategories.data.map(
        ({ attributes: subcategoriesAttributes }) => ({
          caption: subcategoriesAttributes.caption,
          value: subcategoriesAttributes.code,
        }),
      );
    return {
      caption: attributes.caption,
      value: attributes.code,
    };
  });
  return response;
};

function Filters({ categories }) {
  const location = useRouter();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const { categoriesList, subcategoriesList } = useMemo(
    prepareCategories(categories),
    [categories],
  );
  return (
    <div className={css.wrapper}>
      <Formik
        initialValues={{ categories: [], ...location.query }}
        onSubmit={(values) => {
          console.log(values);
          // const valuesStr = qs.stringify(values, {
          //   encode: false,
          //   arrayFormat: 'indices',
          //   skipNulls: true,
          // });
          // location.replace({
          //   query: valuesStr,
          //   pathname: lathocation.asP,
          // });
          // location.reload();
        }}
      >
        {({ errors, values }) => {
          const subcategoryFilteredList = {};
          const isSelectCategories = !!values.categories?.length;
          if (isSelectCategories) {
            values.categories.forEach((elem) => {
              const currentCategory = categoriesList.find(
                (c) => c.value === elem,
              );
              subcategoryFilteredList[currentCategory.caption] =
                subcategoriesList[currentCategory.caption];
            });
          }

          return (
            <Form>
              <div className="ant-row">
                <FormGroup
                  name="categories"
                  label="Категории"
                  component={Select}
                  mode="multiple"
                  list={categoriesList}
                  className="ant-col-8"
                />
                <FormGroup
                  name="price"
                  label="Стоимость"
                  errors={errors}
                  component={Slider}
                  prefix="₽"
                  min={100}
                  max={300000}
                  step={100}
                  className="ant-col-8"
                />
              </div>

              <div className="ant-row">
                <FormGroup
                  name="subcategories"
                  label="Подкатегории"
                  component={SelectWithGroups}
                  mode="multiple"
                  list={
                    isSelectCategories
                      ? subcategoryFilteredList
                      : subcategoriesList
                  }
                  className="ant-col-8"
                />
                <FormGroup
                  name="isFree"
                  label="Тип"
                  component={Select}
                  mode="multiple"
                  list={{ true: 'Платная', false: 'Бесплатная' }}
                  className="ant-col-8"
                />
              </div>

              <button type="submit">Go</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default React.memo(Filters);

// Категория - Селект
// Подкатегория - Селект
// Цена - диапозон
// Длительность - диапозон - ???
//   Тип программы - чекбокс
// Платная Бесплатная Наставник
// Уровень сложности - чекбокс
// Начальный Средний Продвинутый
// Начисление балов
// Сертификат - селект
// Начисление балов - Селект

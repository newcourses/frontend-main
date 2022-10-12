import { Form } from 'formik';
import React, { useMemo } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import {
  Input,
  Slider,
  Select,
  FormGroup,
  SelectWithGroups,
} from 'components/CustomFields';
import SearchHandler from 'utils/SearchHandler';
import useDebouncedEffect from 'hooks/useDebouncedEffect';
import CustomButton from 'components/CustomButton';
import css from './index.module.scss';

const prepareCategories = (categories) => {
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

function FilterForm({ form, categories }) {
  const location = useRouter();

  const { categoriesList, subcategoriesList } = useMemo(
    () => prepareCategories(categories),
    [categories],
  );

  const subcategoryFilteredList = {};
  const isSelectCategories = !!form.values.categories?.length;
  if (isSelectCategories) {
    form.values.categories.forEach((elem) => {
      const currentCategory = categoriesList.find((c) => c.value === elem);
      subcategoryFilteredList[currentCategory.caption] =
        subcategoriesList[currentCategory.caption];
    });
  }

  useDebouncedEffect(
    async () => {
      const searchParams = SearchHandler.stringify(form.values);
      await location.push({ search: searchParams }, undefined, {
        shallow: true,
      });
    },
    [form.values],
    200,
  );

  return (
    <Form className={css.wrapperForm}>
      <div className={cn('ant-row', css.wrapperLine)}>
        <FormGroup
          name="title"
          label="Название"
          component={Input}
          className={cn('ant-col-10 ', css.wrapperItem)}
          allowClear
        />
        <FormGroup
          name="isFree"
          label="Тип"
          component={Select}
          list={{ false: 'Платные', true: 'Бесплатные' }}
          className={cn('ant-col-4', css.wrapperItem)}
          allowClear
        />
        <FormGroup
          name="price"
          label="Стоимость"
          errors={form.errors}
          component={Slider}
          prefix="₽"
          min={100}
          max={300000}
          step={100}
          className={cn('ant-col-8', css.wrapperItem)}
        />
      </div>

      <div className="ant-row">
        <FormGroup
          name="categories"
          label="Категории"
          component={Select}
          mode="multiple"
          list={categoriesList}
          className={cn('ant-col-8', css.wrapperItem)}
          allowClear
        />
        <FormGroup
          name="subcategories"
          label="Подкатегории"
          component={SelectWithGroups}
          mode="multiple"
          list={
            isSelectCategories ? subcategoryFilteredList : subcategoriesList
          }
          className={cn('ant-col-8', css.wrapperItem)}
          allowClear
        />

        <div className={cn(css.wrapperButton, css.wrapperItem)}>
          <CustomButton type="submit" width={200} height={40}>
            Поиск
          </CustomButton>
        </div>
      </div>
    </Form>
  );
}

export default FilterForm;

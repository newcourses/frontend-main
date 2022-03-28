import { Form, Formik } from 'formik';
import {
  isEmail,
  minValue,
  maxValue,
  maxLength,
  isRequired,
  combiningValidators,
} from 'helpers/validations';
import React, { useCallback } from 'react';
import PrivacyCheckbox from 'components/PrivacyCheckbox';
import { MAX_LENGTH_REVIEW_TEXT } from 'library/constants';
import { FormGroup, TextArea } from 'components/CustomFields';
import SetRate from './SetRate';
import css from './index.module.scss';

const ROWS_TEXT_AREA = 10;
const SIZE_RATE = 30;

function FeedbackForm({ schoolId, request, isLoading }) {
  const onSubmit = useCallback(
    async (data) => {
      await request('/reviews', 'POST', null, { ...data, schoolId });
    },
    [request, schoolId],
  );

  return (
    <Formik
      initialValues={{
        grade: 0,
        title: '',
        name: '',
        email: '',
        text: '',
      }}
      onSubmit={onSubmit}
    >
      {({ errors, submitForm, isSubmitting }) => {
        const isDisabled = isLoading || isSubmitting || !submitForm;

        return (
          <Form className={css.formWrapper}>
            <FormGroup
              name="grade"
              errors={errors}
              size={SIZE_RATE}
              component={SetRate}
              validate={combiningValidators(
                isRequired,
                minValue(1),
                maxValue(5),
              )}
            />

            <FormGroup
              name="name"
              size="large"
              errors={errors}
              validate={isRequired}
              disabled={isDisabled}
              style={{ height: '50px' }}
              placeholder="Введите ваше имя:"
            />

            <FormGroup
              name="title"
              size="large"
              errors={errors}
              validate={isRequired}
              disabled={isDisabled}
              style={{ height: '50px' }}
              placeholder="Введите заголовок отзыва:"
            />

            <FormGroup
              showCount
              name="text"
              size="large"
              errors={errors}
              component={TextArea}
              rows={ROWS_TEXT_AREA}
              disabled={isDisabled}
              maxLength={MAX_LENGTH_REVIEW_TEXT}
              placeholder="Введите текст отзыва:"
              validate={combiningValidators(isRequired, maxLength(5000))}
            />

            <FormGroup
              size="large"
              name="email"
              errors={errors}
              disabled={isDisabled}
              style={{ height: '50px' }}
              placeholder="Введите ваш Email:"
              validate={combiningValidators(isRequired, isEmail)}
            />

            <FormGroup
              name="privacy"
              errors={errors}
              disabled={isDisabled}
              validate={isRequired}
              component={PrivacyCheckbox}
            />

            <button
              type="submit"
              disabled={isDisabled}
              className={css.button}
              style={{ width: 300, height: 50 }}
            >
              Отправить
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default React.memo(FeedbackForm);

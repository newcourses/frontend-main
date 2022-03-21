import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { FormGroup, TextArea } from 'components/CustomFields';
import {
  combiningValidators,
  isEmail,
  isRequired,
  maxLength,
  maxValue,
  minValue,
} from 'helpers/validations';
import css from './index.module.scss';
import SetRate from './SetRate';
import useProxyApi from '../../../../../hooks/useProxyApi';
import useDisplayErrorMessage from '../../../../../hooks/useDisplayErrorMessage';

const MAX_LENGTH_TEXT_AREA = 5000;
const ROWS_TEXT_AREA = 10;
const SIZE_RATE = 30;

function FeedbackForm({ schoolId, setFormSent }) {
  const { request, error, clearError, isLoading } = useProxyApi();
  useDisplayErrorMessage(error, clearError);
  const onSubmit = useCallback(
    async (data) => {
      await request('/reviews', 'POST', null, { ...data, schoolId });
      setFormSent(true);
    },
    [request, schoolId, setFormSent],
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
              style={{ height: '50px' }}
              placeholder="Введите ваше имя:"
              disabled={isDisabled}
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
              maxLength={MAX_LENGTH_TEXT_AREA}
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

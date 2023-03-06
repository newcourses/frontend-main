import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { FormGroup, TextArea } from 'components/CustomFields';
import { MAX_LENGTH_REVIEW_TEXT } from 'library/constants';
import useProxyApi from 'hooks/useProxyApi';
import useDisplayErrorMessage from 'hooks/useDisplayErrorMessage';
import {
  combiningValidators,
  isEmail,
  isRequired,
  maxLength,
  minLength,
} from 'helpers/validations';
import Title from 'shared/ui/Title';
import { FEEDBACKS } from 'library/routers';
import css from './index.module.scss';

const ROWS_TEXT_AREA = 10;
const TITLE_TEXT = 'Есть что написать? Мы рады и открыты, пишите!';

function FeedbackForm() {
  const { request, error, clearError, isLoading, isSent } = useProxyApi();
  useDisplayErrorMessage(error, clearError);

  const onSubmit = useCallback(
    async (data) => {
      await request(FEEDBACKS, 'POST', null, data);
    },
    [request],
  );

  return (
    <>
      <Title text="Связаться с нами" />
      <h3>{isSent ? 'Сообщение отправлено' : TITLE_TEXT}</h3>

      {isSent ? (
        <p>
          Спасибо, мы приняли ваше сообщение! В ближайшее время с вами свяжется
          наш менеджер.
        </p>
      ) : (
        <Formik
          initialValues={{
            title: '',
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
                  size="large"
                  name="email"
                  errors={errors}
                  disabled={isDisabled}
                  style={{ height: '50px' }}
                  className={css.fieldWrapper}
                  placeholder="Введите ваш Email:"
                  validate={combiningValidators(isRequired, isEmail)}
                />

                <FormGroup
                  name="title"
                  size="large"
                  errors={errors}
                  validate={isRequired}
                  disabled={isDisabled}
                  style={{ height: '50px' }}
                  className={css.fieldWrapper}
                  placeholder="Введите заголовок обращения:"
                />

                <FormGroup
                  showCount
                  name="text"
                  size="large"
                  errors={errors}
                  component={TextArea}
                  rows={ROWS_TEXT_AREA}
                  disabled={isDisabled}
                  className={css.fieldWrapper}
                  maxLength={MAX_LENGTH_REVIEW_TEXT}
                  placeholder="Введите текст обращения:"
                  validate={combiningValidators(
                    isRequired,
                    minLength(100),
                    maxLength(5000),
                  )}
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
      )}

      <div className={css.contact}>
        Наша почта: <a href="mailto:info@newcourses.ru">info@newcourses.ru</a>
      </div>
    </>
  );
}

export default FeedbackForm;

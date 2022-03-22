import React, { useCallback } from 'react';
import {
  isEmail,
  maxLength,
  isRequired,
  combiningValidators,
} from 'helpers/validations';
import { Collapse } from 'react-collapse';
import { Form, Formik } from 'formik';
import useProxyApi from 'hooks/useProxyApi';
import PrivacyCheckbox from 'components/PrivacyCheckbox';
import { MAX_LENGTH_REVIEW_TEXT } from 'library/constants';
import { FormGroup, TextArea } from 'components/CustomFields';
import useDisplayErrorMessage from 'hooks/useDisplayErrorMessage';
import css from './index.module.scss';

const ROWS_TEXT_AREA = 3;

function LeaveComment({ reviewId, isOpened }) {
  const { request, error, clearError, isLoading } = useProxyApi();
  useDisplayErrorMessage(error, clearError);

  const onSubmit = useCallback(
    async (data) => {
      await request('/comments', 'POST', null, { ...data, reviewId });
    },
    [request, reviewId],
  );

  return (
    <div className={css.container}>
      <Collapse isOpened={isOpened} bordered={false}>
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
                  name="name"
                  errors={errors}
                  validate={isRequired}
                  disabled={isDisabled}
                  placeholder="Введите ваше имя:"
                />

                <FormGroup
                  showCount
                  name="text"
                  errors={errors}
                  component={TextArea}
                  rows={ROWS_TEXT_AREA}
                  disabled={isDisabled}
                  maxLength={MAX_LENGTH_REVIEW_TEXT}
                  placeholder="Введите текст комментария:"
                  validate={combiningValidators(isRequired, maxLength(5000))}
                />

                <FormGroup
                  name="email"
                  errors={errors}
                  disabled={isDisabled}
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
                  Отправить комментарий
                </button>
              </Form>
            );
          }}
        </Formik>
      </Collapse>
    </div>
  );
}

export default React.memo(LeaveComment);

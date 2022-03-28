import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import useProxyApi from 'hooks/useProxyApi';
import CustomButton from 'components/CustomButton';
import { FormGroup } from 'components/CustomFields';
import useDisplayErrorMessage from 'hooks/useDisplayErrorMessage';
import { combiningValidators, isEmail, isRequired } from 'helpers/validations';
import css from './index.module.scss';
import { MAIL_RECIPIENTS } from '../../library/routers';
import PrivacyCheckbox from '../PrivacyCheckbox';

function SubscribeNewsletter() {
  const { isSent, request, error, clearError, isLoading } = useProxyApi();
  useDisplayErrorMessage(error, clearError);

  const onSubmit = useCallback(
    async (data) => {
      await request(MAIL_RECIPIENTS, 'POST', null, data);
    },
    [request],
  );

  return (
    <div>
      {isSent ? (
        <div className={css.title}>Спасибо! Подписка оформлена.</div>
      ) : (
        <>
          <div className={css.title}>
            Подпишитесь на уведомления и получайте самые свежие обновления!
          </div>
          <Formik
            initialValues={{
              privacy: false,
              email: '',
            }}
            onSubmit={onSubmit}
          >
            {({ errors, isSubmitting, submitForm }) => {
              const isDisabled = isLoading || isSubmitting || !submitForm;

              return (
                <Form className={css.formWrapper}>
                  <div className={css.wrapper}>
                    <FormGroup
                      name="email"
                      errors={errors}
                      disabled={isDisabled}
                      placeholder="Введите ваш Email:"
                      wrapperStyle={{ width: '300px' }}
                      validate={combiningValidators(isRequired, isEmail)}
                    />

                    <CustomButton height={32} className={css.button}>
                      Подписаться
                    </CustomButton>
                  </div>
                  <FormGroup
                    name="privacy"
                    errors={errors}
                    disabled={isDisabled}
                    validate={isRequired}
                    component={PrivacyCheckbox}
                    style={{ marginTop: '10px' }}
                  />
                </Form>
              );
            }}
          </Formik>
        </>
      )}
    </div>
  );
}

export default React.memo(SubscribeNewsletter);

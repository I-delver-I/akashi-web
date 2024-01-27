import React, { FC, useCallback } from 'react';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button-mui';
import { ButtonSize } from '@/components/common/ui/button-mui/types';
import { Input, InputType } from '@/components/common/ui/form';
import Checkbox from '@/components/common/ui/form/with-formik/checkbox';
import { RegisterFormFields } from '@/components/pages/register/components/register-form/types';
import { transformData } from '@/components/pages/register/components/register-form/utils';
import useToast from '@/hooks/use-toast';
import { useToastError } from '@/hooks/use-toast-error/useToastError';
import AuthService from '@/lib/services/auth';

import { initialValues } from './constants';
import * as stylesMUI from './RegisterForm.styles';
import { validationSchema } from './validation';

import styles from './FormStyles.module.scss';
const RegisterForm: FC = () => {
  const { displayError } = useToastError();
  const router = useRouter();
  const toast = useToast();

  const handleSubmit = useCallback(
    async (data: RegisterFormFields) => {
      try {
        await AuthService.register(transformData(data));
      } catch (error) {
        displayError(error);
      }
    },
    [toast, router],
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnMount
      validateOnChange
      enableReinitialize
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form className={styles['form']}>
          <Input
            label="Username"
            placeholder="Use latin without whitespaces"
            name="username"
          />
          <Input label="Email" placeholder="example@gmail.com" name="email" />
          <Input
            label="Password"
            type={InputType.PASSWORD}
            placeholder="user302"
            name="password"
            maxLength={32}
          />
          <Input
            label="Password confirmation"
            type={InputType.PASSWORD}
            placeholder="user302"
            name="passwordConfirmation"
            maxLength={32}
          />
          <Checkbox
            label={'I agree to the processing of personal data'}
            name={'agreement'}
            sx={stylesMUI.checkbox}
          />
          <Button
            text="Register"
            type="submit"
            size={ButtonSize.LARGE}
            disabled={!isValid}
            sx={stylesMUI.registerButton}
          />
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;

import { FC, useCallback } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button-mui';
import { ButtonSize } from '@/components/common/ui/button-mui/types';
import { Input, InputSize, InputType } from '@/components/common/ui/form';
import { initialValues } from '@/components/pages/login-page/components/login-form-block/components/login-form/constants';
import { LoginFormFields } from '@/components/pages/login-page/components/login-form-block/components/login-form/types';
import { validationSchema } from '@/components/pages/login-page/components/login-form-block/components/login-form/validation';
import styles from '@/components/pages/login-page/components/login-form-block/LoginFormBlock.module.scss';
import useAuthentication from '@/hooks/use-authentication';
import AuthService from '@/lib/services/auth';
import getErrorMessage from '@/lib/utils/getErrorMessage';

import * as sxStyles from './LoginForm.styles';

const LoginForm: FC = () => {
  const { push, query } = useRouter();
  const { update } = useAuthentication();
  const redirect = query.redirect as string;

  const handleSubmit = useCallback(
    async (
      data: LoginFormFields,
      { setErrors }: FormikHelpers<LoginFormFields>,
    ) => {
      try {
        if (data.username.includes('@'))
          data.username = data.username.toLowerCase();
        await AuthService.login(data);
        await update();
        await push(redirect ? redirect.replace('~', '/') : '/');
      } catch (error: unknown) {
        const message = getErrorMessage(error);
        if (message === 'The password is incorrect') {
          setErrors({
            password: 'Incorrect password',
          });
        } else {
          setErrors({
            username: 'No user with this password and email was found',
            password: 'No user with this password and email was found',
          });
        }
      }
    },
    [push, redirect, update],
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validateOnMount
      validationSchema={validationSchema}
    >
      {({ isValid }) => (
        <Form className={styles['form']}>
          <Input
            label="Username"
            placeholder="Enter your username"
            size={InputSize.LARGE}
            type={InputType.DEFAULT}
            name="username"
          />
          <Input
            label={'Password'}
            placeholder="Enter your password"
            size={InputSize.LARGE}
            type={InputType.PASSWORD}
            name="password"
          />
          <Button
            text="Login"
            size={ButtonSize.LARGE}
            type="submit"
            disabled={!isValid}
            sx={sxStyles.loginButton}
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

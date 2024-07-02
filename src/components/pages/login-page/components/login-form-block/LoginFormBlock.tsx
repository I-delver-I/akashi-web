import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LoginForm from 'src/components/pages/login-page/components/login-form-block/components/login-form';

import Button from '@/components/common/ui/button-mui';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';

import * as sxStyles from './LoginFormBlock.styles';

import styles from './LoginFormBlock.module.scss';

const LoginFormBlock = () => {
  const router = useRouter();

  return (
    <Box sx={sxStyles.loginFormBlock}>
      <Link href="/" className={styles['mobile-login-logo']}>
        <Image
          src="/icons/logo.png"
          alt="akashi logo"
          priority
          width={200}
          height={200}
        />
      </Link>
      <Typography variant="h3SemiBold" sx={sxStyles.loginHeader}>
        Welcome back!
      </Typography>
      <Divider textAlign="center" sx={sxStyles.divider}>
        or
      </Divider>
      <LoginForm />
      <Typography sx={sxStyles.narrowScreenText}>
        Are you not with us?{' '}
      </Typography>
      <Button
        text="Register!"
        size={ButtonSize.SMALL}
        color={ButtonColor.SECONDARY}
        variant={ButtonVariant.OUTLINE}
        sx={sxStyles.registerMobileButton}
        onClick={() => router.push('/register')}
      />
      <Button
        sx={sxStyles.comebackButton}
        text="Come back to home"
        startIcon={
          <ChevronLeftIcon style={{ width: '18px', height: '18px' }} />
        }
        variant={ButtonVariant.TEXT}
        size={ButtonSize.SMALL}
        onClick={() => router.push('/ ')}
      />
    </Box>
  );
};

export default LoginFormBlock;

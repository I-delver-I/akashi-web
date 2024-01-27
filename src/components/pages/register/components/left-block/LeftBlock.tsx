import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Button from '@/components/common/ui/button-mui';
import {
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import RegisterForm from '@/components/pages/register/components/register-form';

import * as stylesMUI from './LeftBlock.styles';

import styles from './Link.module.scss';

const LeftBlock: FC = () => {
  const router = useRouter();

  return (
    <Box sx={stylesMUI.leftBlock}>
      <Link href="/" className={styles['mobile-register-logo-container']}>
        <Image
          src="/icons/logo.png"
          alt="akashi logo"
          width={200}
          height={200}
        />
      </Link>
      <Typography variant="h3" sx={stylesMUI.loginHeader}>
        Create account
      </Typography>
      <RegisterForm />
      <Typography sx={stylesMUI.mobileText}>
        Already have an account?
      </Typography>
      <Button
        text="Login!"
        size={ButtonSize.SMALL}
        color={ButtonColor.SECONDARY}
        variant={ButtonVariant.OUTLINE}
        sx={stylesMUI.loginMobileButton}
        onClick={() => {
          void router.push('/login');
        }}
      />
    </Box>
  );
};

export default LeftBlock;

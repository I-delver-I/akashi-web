import { Link } from '@mui/material';
import NextLink from 'next/link';

import * as styles from '@/components/common/layout/header/components/authentication-buttons/AuthenticationButtons.styles';
import Button from '@/components/common/ui/button-mui';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';

const LoginButton = () => {
  return (
    <Link
      href="/login"
      sx={styles.loginButton}
      underline="none"
      color="inherit"
      component={NextLink}
    >
      <Button
        text="Login"
        size={ButtonSize.SMALL}
        variant={ButtonVariant.FILLED}
        sx={{ color: 'blue' }}
      />
    </Link>
  );
};

export default LoginButton;

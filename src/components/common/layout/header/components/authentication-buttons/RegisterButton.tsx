import { Link } from '@mui/material';
import NextLink from 'next/link';

import * as styles from '@/components/common/layout/header/components/authentication-buttons/AuthenticationButtons.styles';
import Button from '@/components/common/ui/button-mui';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';

const RegisterButton = () => {
  return (
    <Link
      href="/register"
      sx={styles.registerButton}
      underline="none"
      color="inherit"
      component={NextLink}
    >
      <Button
        text="Register"
        size={ButtonSize.SMALL}
        variant={ButtonVariant.OUTLINE}
      />
    </Link>
  );
};

export default RegisterButton;

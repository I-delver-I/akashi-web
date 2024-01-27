import { FC } from 'react';
import { Box, Link } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import Button from '@/components/common/ui/button-mui';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './AuthenticationButtons.styles';

interface AuthenticationButtonsProps {
  sx?: SxProps<Theme>;
}

const AuthenticationButtons: FC<AuthenticationButtonsProps> = ({ sx = {} }) => {
  return (
    <Box sx={mergeSx(styles.authenticationButtons, sx)}>
      <Link
        href="/register"
        sx={styles.registerButton}
        underline="none"
        color="inherit"
      >
        <Button
          text="Register"
          size={ButtonSize.SMALL}
          variant={ButtonVariant.OUTLINE}
        />
      </Link>
      <Link
        href="/login"
        sx={styles.loginButton}
        underline="none"
        color="inherit"
      >
        <Button
          text="Login"
          size={ButtonSize.SMALL}
          variant={ButtonVariant.FILLED}
        />
      </Link>
    </Box>
  );
};

export default AuthenticationButtons;

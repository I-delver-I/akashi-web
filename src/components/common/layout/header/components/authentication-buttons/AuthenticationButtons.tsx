import { FC } from 'react';
import { Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

import LoginButton from '@/components/common/layout/header/components/authentication-buttons/LoginButton';
import RegisterButton from '@/components/common/layout/header/components/authentication-buttons/RegisterButton';
import mergeSx from '@/lib/utils/MergeSxStylesUtil';

import * as styles from './AuthenticationButtons.styles';

interface AuthenticationButtonsProps {
  sx?: SxProps<Theme>;
}

const AuthenticationButtons: FC<AuthenticationButtonsProps> = ({ sx = {} }) => {
  return (
    <Box sx={mergeSx(styles.authenticationButtons, sx)}>
      <RegisterButton />
      <LoginButton />
    </Box>
  );
};

export default AuthenticationButtons;

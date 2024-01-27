import { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/system';

import theme from '@/styles/theme';

export const headerContainer: SxProps<Theme> = {
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  height: '64px',
  justifyContent: 'space-between',
  boxShadow: 'unset',
  backgroundColor: alpha(theme.palette.grey[50], 0.62),
  backdropFilter: 'blur(8px)',
};

export const logoContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

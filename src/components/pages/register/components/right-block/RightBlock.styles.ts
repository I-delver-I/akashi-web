import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const rightBlock: SxProps<Theme> = {
  display: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '50px',
  maxWidth: '400px',

  [theme.breakpoints.up('desktopSemiMedium')]: {
    display: 'flex',
  },
};

export const loginText: SxProps<Theme> = {
  textAlign: 'center',
  fontWeight: '600',
  fontSize: '36px',
  lineHeight: '128%',
};

export const loginButton: SxProps<Theme> = {
  maxWidth: '324px',
  maxHeight: '48px',
  borderRadius: '8px',
};

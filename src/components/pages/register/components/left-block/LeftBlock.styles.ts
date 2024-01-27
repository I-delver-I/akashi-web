import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';
export const leftBlock: SxProps<Theme> = {
  width: '480px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export const loginHeader: SxProps<Theme> = {
  marginTop: '36px',
  textAlign: 'center',
  fontSize: '36px',
  lineHeight: '128%',
  fontWeight: '600',
  display: {
    mobile: 'none',
    desktopSemiMedium: 'block',
  },
};
export const mobileText: SxProps<Theme> = {
  display: 'flex',
  typography: 'body2Medium',
  margin: '0 0 14px 0',
  color: theme.palette.grey[600],

  [theme.breakpoints.up('desktopSemiMedium')]: {
    display: 'none',
  },
};

export const loginMobileButton: SxProps<Theme> = {
  display: 'flex',
  width: {
    mobile: '77px',
    tablet: 'fitContent',
  },
  marginBottom: '30px',

  [theme.breakpoints.up('desktopSemiMedium')]: {
    display: 'none',
  },

  borderRadius: '6px',
};

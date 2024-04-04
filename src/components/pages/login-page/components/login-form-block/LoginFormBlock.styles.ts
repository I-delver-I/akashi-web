import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const loginFormBlock: SxProps<Theme> = {
  width: '480px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export const loginHeader: SxProps<Theme> = {
  textAlign: 'center',
  color: theme.palette.grey[800],

  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'none',
  },
};

export const registerMobileButton: SxProps<Theme> = {
  width: 'fit-content',
  display: 'none',
  borderRadius: '6px',
  padding: '8px 16px',
  color: 'orange',

  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'flex',
  },
};

export const comebackButton: SxProps<Theme> = {
  marginTop: '26px',
  marginBottom: '40px',
  typography: theme.typography.body1Bold,
  gap: '10px',
  color: theme.palette.grey[800],

  [theme.breakpoints.down('mobileMedium')]: {
    marginTop: '16px',
  },
};

export const divider: SxProps<Theme> = {
  width: '100%',
  color: theme.palette.grey[800],
  '&::before, &::after': {
    borderColor: theme.palette.grey[800],
  },
};

export const narrowScreenText: SxProps<Theme> = {
  display: 'none',
  margin: '22px 0 14px 0',
  typography: theme.typography.body2Medium,
  color: theme.palette.grey[600],

  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'flex',
  },
};

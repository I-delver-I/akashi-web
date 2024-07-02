import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const registerPage: SxProps<Theme> = {
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 16px',

  backgroundSize: {
    mobile: '1200px 100%',
    desktopSemiMedium: '100% 100%',
  },
};

export const registerContent: SxProps<Theme> = {
  zIndex: '1',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  maxWidth: {
    mobile: '480px',
    desktopSemiMedium: '1200px',
  },

  alignItems: {
    mobile: 'flex-start',
    desktopSemiMedium: 'center',
  },
};

export const divider: SxProps<Theme> = {
  borderTopWidth: '635px',
  width: '1px',
  display: 'block',
  margin: '50px',

  [theme.breakpoints.down('desktopSemiMedium')]: {
    display: 'none',
  },
};

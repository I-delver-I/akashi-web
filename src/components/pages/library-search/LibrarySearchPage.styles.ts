import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const layout: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: {
    mobile: '12px 16px',
    desktop: '0px 80px 32px',
  },
};

export const logo: SxProps<Theme> = {
  [theme.breakpoints.down('desktop')]: {
    display: 'none',
  },
};

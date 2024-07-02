import { SxProps, Theme } from '@mui/material/styles';

import theme from '@/styles/theme';

export const layout: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: {
    mobile: '12px 16px',
    desktop: '0px 80px 32px',
  },
  pb: '75px',
};

export const logo: SxProps<Theme> = {
  [theme.breakpoints.down('desktop')]: {
    display: 'none',
  },
};

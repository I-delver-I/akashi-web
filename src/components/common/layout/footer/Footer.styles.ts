import { SxProps, Theme } from '@mui/material/styles';
import { alpha } from '@mui/system';

export const footerContainer: SxProps<Theme> = theme => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  width: '100%',
  backgroundColor: alpha(theme.palette.grey[50], 0.62),
  gap: '30px',
  height: {
    desktop: '300px',
    mobileSemiMedium: '320px',
    mobile: '320px',
  },
  padding: '20px',
  borderTop: `1px solid ${theme.palette.divider}`,
});

export const footerLogoContainer: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  marginTop: {
    desktop: '60px',
    mobile: '55px',
  },
  marginLeft: {
    desktop: '80px',
  },
  marginBottom: {
    desktop: '0px',
    mobile: '15px',
  },
  alignItems: 'center',
};

export const footerLogo: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  height: {
    desktop: '28px',
    mobile: '22px',
  },
  zIndex: 1,
  marginTop: {
    desktop: '0',
    mobile: '10px',
  },
};

export const signature: SxProps<Theme> = {
  marginTop: '10px',
  textTransform: 'none !important',
  typography: {
    desktop: 'body2',
    mobile: 'overline',
  },
};

export const title: SxProps<Theme> = () => ({
  display: 'flex',
  justifyContent: 'left',
  whiteSpace: 'nowrap',
  color: 'grey.500',
  width: '100%',
  textTransform: 'none !important',
  typography: {
    desktop: 'body2',
    mobile: 'overline',
  },
  height: {
    desktop: '30px',
    mobile: '20px',
  },
  padding: {
    desktop: '2px 12px',
    mobile: '2px 8px',
  },
});

export const support: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2px',
  typography: 'body1Medium',
  marginTop: {
    desktop: '40px',
    mobile: '10px',
  },
  marginRight: {
    desktop: '72px',
  },
  '& a:hover': {
    textDecoration: 'underline',
  },
  // marginLeft: {
  //   desktop: '0',
  //   mobile: '45px',
  // },
};

export const button: SxProps<Theme> = {
  // width: 'fit-content',
  // paddingLeft: '12px',
  typography: 'body1Medium',
};

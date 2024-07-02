import { SxProps, Theme } from '@mui/material/styles';

export const menu: SxProps<Theme> = {
  display: { xs: 'none', md: 'flex' },
  flexGrow: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  width: 'fit-content',
  gap: '16px',
  md: 'none',
};

export const button = (currentPath: string, link: string): SxProps<Theme> => ({
  typography: 'body1Medium',
  textUnderlineOffset: '5px',
  fontWeight: 'bold',
  textDecoration: currentPath === link ? 'underline' : 'none',
  '&:hover': {
    textUnderlineOffset: '5px',
  },
});

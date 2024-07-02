import { SxProps, Theme } from '@mui/material/styles';

export const inputLabel: SxProps<Theme> = {
  color: 'white',
  '&.Mui-focused': { color: 'lightblue' },
  fontWeight: 'bold',
};

export const select: SxProps<Theme> = {
  color: 'white',
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'lightblue' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'forestgreen' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'forestgreen',
  },
};

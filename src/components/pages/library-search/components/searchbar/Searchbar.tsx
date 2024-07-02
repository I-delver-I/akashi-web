import { useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import {
  Divider,
  IconButton,
  InputBase,
  InputBaseProps,
  Paper,
} from '@mui/material';
import { useRouter } from 'next/router';

type SearchbarProps = {
  onSubmit(searchTerm: string): void;
  inputProps?: InputBaseProps;
};
const Searchbar = ({ onSubmit }: SearchbarProps) => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState(
    (router.query.q as string) ?? '',
  );

  return (
    <Paper
      component="form"
      elevation={3}
      sx={{
        display: 'flex',
        alignItems: 'center',
        px: 1,
        py: 0.5,
        marginTop: '10px',
        width: '100%',
      }}
      onSubmit={e => {
        e.preventDefault();
        onSubmit(searchTerm);
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        value={searchTerm}
        onChange={e => {
          setSearchTerm(e.target.value);
        }}
      />
      <Divider sx={{ height: 28, mx: 0.5 }} orientation="vertical" />
      <IconButton type="submit" aria-label="search">
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
};
export default Searchbar;

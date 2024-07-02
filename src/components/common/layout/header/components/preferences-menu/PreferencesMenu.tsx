import React, { FC } from 'react';
import { Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import useAuthentication from '@/hooks/use-authentication';
import AuthService from '@/lib/services/auth';

const PreferencesMenu: FC = () => {
  const { reload } = useRouter();
  const { update } = useAuthentication();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogoutMenuItemClick = async () => {
    handleCloseUserMenu();
    await handleLogout();
  };

  const handleLogout = async () => {
    await AuthService.logout();
    await update();
    reload();
    // await replace('/');
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="User menu">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/images/preview.png" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          component={NextLink}
          href="/manage-libraries"
          onClick={handleCloseUserMenu}
        >
          <Typography textAlign="center">Manage libraries</Typography>
        </MenuItem>
        <MenuItem component={Link} onClick={handleLogoutMenuItemClick}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default PreferencesMenu;

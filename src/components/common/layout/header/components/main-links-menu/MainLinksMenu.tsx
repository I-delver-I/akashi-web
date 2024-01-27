import React, { FC } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';

import * as styles from '@/components/common/layout/header/components/main-links-menu/MainLinksMenu.styles';
import { mainLinks } from '@/components/common/layout/header/constants';
import {
  ButtonSize,
  ButtonVariant,
} from '@/components/common/ui/button-mui/types';

const MainLinksMenu: FC = () => {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {mainLinks.map((page, index) => (
            <MenuItem
              key={index}
              component={Link}
              href={page.link}
              onClick={handleCloseNavMenu}
            >
              <Typography textAlign="center">{page.text}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={styles.menu}>
        {mainLinks.map((page, index) => (
          <Button
            key={index}
            onClick={handleCloseNavMenu}
            component={Link}
            href={page.link}
            sx={styles.button(router.pathname, page.link)}
            size={ButtonSize.MEDIUM}
            variant={ButtonVariant.TEXT}
          >
            {page.text}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default MainLinksMenu;

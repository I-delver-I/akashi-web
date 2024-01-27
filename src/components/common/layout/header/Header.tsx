import React, { FC } from 'react';
import { Link } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { Breakpoint } from '@mui/system';
import Image from 'next/image';

import AuthenticationButtons from '@/components/common/layout/header/components/authentication-buttons';
import MainLinksMenu from '@/components/common/layout/header/components/main-links-menu/MainLinksMenu';
import PreferencesMenu from '@/components/common/layout/header/components/preferences-menu/PreferencesMenu';
import useAuthentication from '@/hooks/use-authentication';

import * as styles from './Header.styles';

const Header: FC = () => {
  const { isLoggedIn } = useAuthentication();

  return (
    <AppBar position="static" sx={styles.headerContainer}>
      <Container maxWidth={'xl' as Breakpoint}>
        <Toolbar disableGutters>
          <Link href="/" sx={styles.logoContainer}>
            <Image
              src="/icons/logo.png"
              alt="akashi logo"
              width={90}
              height={90}
            />
          </Link>
          <MainLinksMenu />
          {isLoggedIn ? <PreferencesMenu /> : <AuthenticationButtons />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

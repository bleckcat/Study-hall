import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MobileHeader from './components/MobileHeader';
import NavHeader from './components/NavHeader';
import ProfileIcon from './components/ProfileIcon';

function NavPanel() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavHeader />
          <MobileHeader />
          <ProfileIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default function Header() {
  return <NavPanel />;
}

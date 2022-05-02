import React from 'react';
import { Box, Button } from '@mui/material';
import { MAIN_PAGES } from '../../../constants/pagesRoutes';
import { RouteLink } from '../style';
import Logo from './Logo';

function NavHeader() {
  return (
    <>
      <Logo />
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {MAIN_PAGES.map((page) => (
          <RouteLink to={page}>
            <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
              {page}
            </Button>
          </RouteLink>
        ))}
      </Box>
    </>
  );
}

export default NavHeader;

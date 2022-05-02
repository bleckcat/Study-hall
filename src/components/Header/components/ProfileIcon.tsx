import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import i18next from 'i18next';
import React from 'react';
import { MAIN_SETTINGS } from '../../../constants/pagesRoutes';
import { RouteLink } from '../style';

function ProfileIcon() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const changeLanguage = () => {
    if (i18next.language === 'pt') {
      return i18next.changeLanguage('en');
    }
    return i18next.changeLanguage('pt');
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}>
        {MAIN_SETTINGS.map((setting) => (
          <RouteLink to={setting}>
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          </RouteLink>
        ))}
        <MenuItem
          key="change-lang"
          onClick={() => {
            changeLanguage();
            handleCloseUserMenu();
          }}>
          <Typography textAlign="center">Change Language</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default ProfileIcon;

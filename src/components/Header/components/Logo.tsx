import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';

function Logo({ isMobile }) {
  const logoOptions = isMobile
    ? { flexGrow: 1, display: { xs: 'flex', md: 'none' } }
    : { mr: 2, display: { xs: 'none', md: 'flex' } };

  return (
    <Typography variant="h6" noWrap component="div" sx={logoOptions}>
      Study Hall
    </Typography>
  );
}

Logo.propTypes = {
  isMobile: PropTypes.bool
};

Logo.defaultProps = {
  isMobile: false
};

export default Logo;

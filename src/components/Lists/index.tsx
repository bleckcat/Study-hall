import { Box, Grid } from '@mui/material';
import React from 'react';

interface Props {
  children: any;
}

export function ListBase({ children }: Props) {
  return (
    <Box mt={2}>
      <Grid container spacing={2}>
        {children}
      </Grid>
    </Box>
  );
}

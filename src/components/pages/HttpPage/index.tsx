import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ListBase } from '../../Lists';
import ExplanationCards from '../../ExplanationCard';

function HttpPage() {
  const { t } = useTranslation();
  const translationObject: Object = t('http', { returnObjects: true });

  return (
    <ListBase>
      <Grid item xs={12}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h5">HTTP verbs</Typography>
          </Box>
          {Object.values(translationObject).map((item, index) => (
            <ExplanationCards item={item} index={index} />
          ))}
        </Stack>
      </Grid>
    </ListBase>
  );
}

export default HttpPage;

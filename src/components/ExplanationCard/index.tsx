import React from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Typography } from '@mui/material';
import { Item } from './style';

function MapParagraph({ paragraphs }) {
  return paragraphs.map((item) => <Typography variant="body2">{item}</Typography>);
}

function ExplanationCards({ item, index }) {
  return (
    <Item key={index} elevation={3}>
      <Box p={1}>
        <Typography variant="subtitle2">{item.title}</Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <MapParagraph paragraphs={item.paragraph} />
      </Box>
    </Item>
  );
}

ExplanationCards.propTypes = {
  item: PropTypes.objectOf(Object).isRequired,
  index: PropTypes.number.isRequired
};

export default ExplanationCards;

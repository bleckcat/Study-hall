import { Box, styled } from '@mui/material';

export const MainContainer = styled(Box)`
  background-color: ${(props) => props.theme.palette.background.paper};
  color: ${(props) => props.theme.palette.text.primary};
`;

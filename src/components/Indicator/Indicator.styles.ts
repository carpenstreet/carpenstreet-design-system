import { Box, styled } from '@mui/material';

export const IndicatorContainer = styled(Box)`
  padding: 4px;
  border-radius: 100px;
  gap: 4px;
  border-color: ${(props) => props.theme.palette['color/gray/dim/200']};
  border-width: 1px;
  border-style: solid;
  display: flex;
  width: fit-content;
`;

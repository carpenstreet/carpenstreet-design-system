import { Box, styled } from '@mui/material';

export const DotContainer = styled(Box)`
  width: 6px;
  height: 6px;
  background-color: ${(props) => props.theme.palette['color/gray/300']};
  border-radius: 50%;
  cursor: pointer;

  &.dot-focus {
    background-color: ${(props) => props.theme.palette['color/primary/600']};
  }
`;

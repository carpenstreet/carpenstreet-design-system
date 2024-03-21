import React from 'react';
import { Tooltip as MUITooltip } from '@mui/material';
import { TooltipPropsType } from './Tooltip.types.ts';
import Typography from '../Typography/Typography';
import { placementMapping } from './Tooltip.constants.ts';

export default function Tooltip(props: TooltipPropsType) {
  const { children, color = 'default', ...other } = props;

  const tooltipProps = {
    ...other,
    color,
    placement: placementMapping[other.direction],
    arrow: other.direction !== 'none',
    title: (
      <Typography variant={'typography/label/large/regular'} color={'color/white'}>
        {other.title}
      </Typography>
    ),
  };

  return <MUITooltip {...tooltipProps}>{children}</MUITooltip>;
}

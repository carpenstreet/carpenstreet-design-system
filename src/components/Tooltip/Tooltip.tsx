import React from 'react';
import { Tooltip as MUITooltip } from '@mui/material';
import { TooltipPropsType } from '@components/Tooltip/Tooltip.types.ts';
import { Typography } from '@components';
import { placementMapping } from '@components/Tooltip/Tooltip.constants.ts';

const Tooltip = (props: TooltipPropsType) => {
  const { children, ...other } = props;

  const tooltipProps = {
    ...other,
    placement: placementMapping[other.direction],
    arrow: other.direction !== 'none',
    title: (
      <Typography variant={'typography/label/large/regular'} color={'color/white'}>
        {other.title}
      </Typography>
    ),
  };

  return <MUITooltip {...tooltipProps}>{children}</MUITooltip>;
};

export default Tooltip;

import { TooltipProps as MUITooltipProps } from '@mui/material/Tooltip/Tooltip';
import { placementMapping } from '@components/Tooltip/Tooltip.constants.ts';

export type TooltipPlacementType = keyof typeof placementMapping;

export type TooltipPropsType = MUITooltipProps & {
  title: string;
  direction: TooltipPlacementType;
  color?: 'default' | 'grayishViolet' | 'primary';
};

import { TooltipProps as MUITooltipProps } from '@mui/material/Tooltip/Tooltip';
import { placementMapping } from '@components/Tooltip/Tooltip.constants.ts';

export type TooltipPlacementType = keyof typeof placementMapping;

export type TooltipPropsType = {
  title: string;
  direction: TooltipPlacementType;
  color?: 'default' | 'grayishViolet' | 'primary';
} & Omit<MUITooltipProps, 'placement' | 'arrow' | 'title'>;

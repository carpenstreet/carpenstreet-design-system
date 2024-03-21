import { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import ThemeMui from '../../shared/settings/ThemeMui';
import { Box } from '@mui/material';

const meta: Meta<typeof Tooltip> = {
  title: 'Component/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const TooltipBox = (text: string) => (
  <Box sx={{ border: '1px #ccc solid', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', borderRadius: '8px' }}>
    {text}
  </Box>
);

// -----

export const Default: Story = {
  args: {
    children: TooltipBox(''),
    title: '툴팁 속 텍스트',
    direction: 'none',
    color: 'default',
    open: true,
  },
};

// ----------------------------------------------------------------------
// Default
// ----------------------------------------------------------------------

export const DefaultTopLeftTooltip: Story = {
  args: {
    children: TooltipBox('Top Left'),
    title: 'Top Left',
    direction: 'top-left',
    open: true,
  },
};

export const DefaultTopTooltip: Story = {
  args: {
    children: TooltipBox('Top'),
    title: 'Top',
    direction: 'top',
    open: true,
  },
};

export const DefaultTopRightTooltip: Story = {
  args: {
    children: TooltipBox('Top Right'),
    title: 'Top Right',
    direction: 'top-right',
    open: true,
  },
};

// -----

export const DefaultRightTopTooltip: Story = {
  args: {
    children: TooltipBox('Right Top'),
    title: 'Right Top',
    direction: 'right-top',
    open: true,
  },
};

export const DefaultRightTooltip: Story = {
  args: {
    children: TooltipBox('Right'),
    title: 'Right',
    direction: 'right',
    open: true,
  },
};

export const DefaultRightBottomTooltip: Story = {
  args: {
    children: TooltipBox('Right Bottom'),
    title: 'Right Bottom',
    direction: 'right-bottom',
    open: true,
  },
};

// -----

export const DefaultBottomLeftTooltip: Story = {
  args: {
    children: TooltipBox('Bottom Left'),
    title: 'Bottom Left',
    direction: 'bottom-left',
    open: true,
  },
};

export const DefaultBottomTooltip: Story = {
  args: {
    children: TooltipBox('Bottom'),
    title: 'Bottom',
    direction: 'bottom',
    open: true,
  },
};

export const DefaultBottomRightTooltip: Story = {
  args: {
    children: TooltipBox('Bottom Right'),
    title: 'Bottom Right',
    direction: 'bottom-right',
    open: true,
  },
};

// -----

export const DefaultLeftTopTooltip: Story = {
  args: {
    children: TooltipBox('Left Top'),
    title: 'Left Top',
    direction: 'left-top',
    open: true,
  },
};

export const DefaultLeftTooltip: Story = {
  args: {
    children: TooltipBox('Left'),
    title: 'Left',
    direction: 'left',
    open: true,
  },
};

export const DefaultLeftBottomTooltip: Story = {
  args: {
    children: TooltipBox('Left Bottom'),
    title: 'Left Bottom',
    direction: 'left-bottom',
    open: true,
  },
};

// ----------------------------------------------------------------------
// GrayishViolet
// ----------------------------------------------------------------------

export const GrayishVioletTopLeftTooltip: Story = {
  args: {
    children: TooltipBox('Top Left'),
    title: 'Top Left',
    direction: 'top-left',
    open: true,
    color: 'grayishViolet',
  },
};

export const GrayishVioletTopTooltip: Story = {
  args: {
    children: TooltipBox('Top'),
    title: 'Top',
    direction: 'top',
    open: true,
    color: 'grayishViolet',
  },
};

export const GrayishVioletTopRightTooltip: Story = {
  args: {
    children: TooltipBox('Top Right'),
    title: 'Top Right',
    direction: 'top-right',
    open: true,
    color: 'grayishViolet',
  },
};

// -----

export const GrayishVioletRightTopTooltip: Story = {
  args: {
    children: TooltipBox('Right Top'),
    title: 'Right Top',
    direction: 'right-top',
    open: true,
    color: 'grayishViolet',
  },
};

export const GrayishVioletRightTooltip: Story = {
  args: {
    children: TooltipBox('Right'),
    title: 'Right',
    direction: 'right',
    open: true,
    color: 'grayishViolet',
  },
};

export const GrayishVioletRightBottomTooltip: Story = {
  args: {
    children: TooltipBox('Right Bottom'),
    title: 'Right Bottom',
    direction: 'right-bottom',
    open: true,
    color: 'grayishViolet',
  },
};

// -----

export const GrayishVioletBottomLeftTooltip: Story = {
  args: {
    children: TooltipBox('Bottom Left'),
    title: 'Bottom Left',
    direction: 'bottom-left',
    open: true,
    color: 'grayishViolet',
  },
};

export const GrayishVioletBottomTooltip: Story = {
  args: {
    children: TooltipBox('Bottom'),
    title: 'Bottom',
    direction: 'bottom',
    open: true,
    color: 'grayishViolet',
  },
};

export const GrayishVioletBottomRightTooltip: Story = {
  args: {
    children: TooltipBox('Bottom Right'),
    title: 'Bottom Right',
    direction: 'bottom-right',
    open: true,
    color: 'grayishViolet',
  },
};

// -----

export const GrayishVioletLeftTopTooltip: Story = {
  args: {
    children: TooltipBox('Left Top'),
    title: 'Left Top',
    direction: 'left-top',
    open: true,
    color: 'grayishViolet',
  },
};

export const GrayishVioletLeftTooltip: Story = {
  args: {
    children: TooltipBox('Left'),
    title: 'Left',
    direction: 'left',
    open: true,
    color: 'grayishViolet',
  },
};

export const GrayishVioletLeftBottomTooltip: Story = {
  args: {
    children: TooltipBox('Left Bottom'),
    title: 'Left Bottom',
    direction: 'left-bottom',
    open: true,
    color: 'grayishViolet',
  },
};

// ----------------------------------------------------------------------
// Primary
// ----------------------------------------------------------------------

export const PrimaryTopLeftTooltip: Story = {
  args: {
    children: TooltipBox('Top Left'),
    title: 'Top Left',
    direction: 'top-left',
    open: true,
    color: 'primary',
  },
};

export const PrimaryTopTooltip: Story = {
  args: {
    children: TooltipBox('Top'),
    title: 'Top',
    direction: 'top',
    open: true,
    color: 'primary',
  },
};

export const PrimaryTopRightTooltip: Story = {
  args: {
    children: TooltipBox('Top Right'),
    title: 'Top Right',
    direction: 'top-right',
    open: true,
    color: 'primary',
  },
};

// -----

export const PrimaryRightTopTooltip: Story = {
  args: {
    children: TooltipBox('Right Top'),
    title: 'Right Top',
    direction: 'right-top',
    open: true,
    color: 'primary',
  },
};

export const PrimaryRightTooltip: Story = {
  args: {
    children: TooltipBox('Right'),
    title: 'Right',
    direction: 'right',
    open: true,
    color: 'primary',
  },
};

export const PrimaryRightBottomTooltip: Story = {
  args: {
    children: TooltipBox('Right Bottom'),
    title: 'Right Bottom',
    direction: 'right-bottom',
    open: true,
    color: 'primary',
  },
};

// -----

export const PrimaryBottomLeftTooltip: Story = {
  args: {
    children: TooltipBox('Bottom Left'),
    title: 'Bottom Left',
    direction: 'bottom-left',
    open: true,
    color: 'primary',
  },
};

export const PrimaryBottomTooltip: Story = {
  args: {
    children: TooltipBox('Bottom'),
    title: 'Bottom',
    direction: 'bottom',
    open: true,
    color: 'primary',
  },
};

export const PrimaryBottomRightTooltip: Story = {
  args: {
    children: TooltipBox('Bottom Right'),
    title: 'Bottom Right',
    direction: 'bottom-right',
    open: true,
    color: 'primary',
  },
};

// -----

export const PrimaryLeftTopTooltip: Story = {
  args: {
    children: TooltipBox('Left Top'),
    title: 'Left Top',
    direction: 'left-top',
    open: true,
    color: 'primary',
  },
};

export const PrimaryLeftTooltip: Story = {
  args: {
    children: TooltipBox('Left'),
    title: 'Left',
    direction: 'left',
    open: true,
    color: 'primary',
  },
};

export const PrimaryLeftBottomTooltip: Story = {
  args: {
    children: TooltipBox('Left Bottom'),
    title: 'Left Bottom',
    direction: 'left-bottom',
    open: true,
    color: 'primary',
  },
};

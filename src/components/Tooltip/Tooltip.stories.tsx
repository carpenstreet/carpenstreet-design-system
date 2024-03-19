import { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import ThemeMui from '@shared/settings/ThemeMui';
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
  <Box sx={{ border: '1px #ccc solid', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>{text}</Box>
);

// -----

export const Default: Story = {
  args: {
    children: TooltipBox('Hover!'),
    title: '툴팁 속 텍스트',
  },
};

// -----

export const TopStartTooltip: Story = {
  args: {
    children: TooltipBox('Top Start'),
    title: 'Top Start',
    placement: 'top-start',
  },
};

export const TopTooltip: Story = {
  args: {
    children: TooltipBox('Top'),
    title: 'Top',
    placement: 'top',
  },
};

export const TopEndTooltip: Story = {
  args: {
    children: TooltipBox('Top End'),
    title: 'Top End',
    placement: 'top-end',
  },
};

// -----

export const RightStartTooltip: Story = {
  args: {
    children: TooltipBox('Right Start'),
    title: 'Right Start',
    placement: 'right-start',
  },
};

export const RightTooltip: Story = {
  args: {
    children: TooltipBox('Right'),
    title: 'Right',
    placement: 'right',
  },
};

export const RightEndTooltip: Story = {
  args: {
    children: TooltipBox('Right End'),
    title: 'Right End',
    placement: 'right-end',
  },
};

// -----

export const BottomStartTooltip: Story = {
  args: {
    children: TooltipBox('Bottom Start'),
    title: 'Bottom Start',
    placement: 'bottom-start',
  },
};

export const BottomTooltip: Story = {
  args: {
    children: TooltipBox('Bottom'),
    title: 'Bottom',
    placement: 'bottom',
  },
};

export const BottomEndTooltip: Story = {
  args: {
    children: TooltipBox('Bottom End'),
    title: 'Bottom End',
    placement: 'bottom-end',
  },
};

// -----

export const LeftStartTooltip: Story = {
  args: {
    children: TooltipBox('Left Start'),
    title: 'Left Start',
    placement: 'left-start',
  },
};

export const LeftTooltip: Story = {
  args: {
    children: TooltipBox('Left'),
    title: 'Left',
    placement: 'left',
  },
};

export const LeftEndTooltip: Story = {
  args: {
    children: TooltipBox('Left End'),
    title: 'Left End',
    placement: 'left-end',
  },
};

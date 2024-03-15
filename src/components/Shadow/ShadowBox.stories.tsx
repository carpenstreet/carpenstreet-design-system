import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '@shared/settings/ThemeMui';
import { Box, BoxProps } from '@mui/material';

const meta: Meta<BoxProps> = {
  title: 'Foundation/Shadow',
  component: Box,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<BoxProps>;

const CommonSX = {
  width: 100,
  height: 100,
  textAlign: 'center',
  lineHeight: '100px',
  fontSize: '12px',
};

export const ShadowBox1: Story = {
  args: {
    children: 'Shadow 1',
    sx: {
      ...CommonSX,
      boxShadow: 1,
    },
  },
};

export const ShadowBox2: Story = {
  args: {
    children: 'Shadow 2',
    sx: {
      ...CommonSX,
      boxShadow: 2,
    },
  },
};

export const ShadowBox3: Story = {
  args: {
    children: 'Shadow 3',
    sx: {
      ...CommonSX,
      boxShadow: 3,
    },
  },
};

export const ShadowBox4: Story = {
  args: {
    children: 'Shadow 4',
    sx: {
      ...CommonSX,
      boxShadow: 4,
    },
  },
};

import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '@shared/settings/ThemeMui';
import { Paper, PaperProps } from '@mui/material';

const meta: Meta<PaperProps> = {
  title: 'Foundation/Shadow',
  component: Paper,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<PaperProps>;

const CommonSX = {
  width: 100,
  height: 100,
  textAlign: 'center',
  lineHeight: '100px',
  fontSize: '12px',
};

export const ShadowPaper1: Story = {
  args: {
    elevation: 1,
    children: 'Shadow 1',
    sx: CommonSX,
  },
};

export const ShadowPaper2: Story = {
  args: {
    elevation: 2,
    children: 'Shadow 2',
    sx: CommonSX,
  },
};

export const ShadowPaper3: Story = {
  args: {
    elevation: 3,
    children: 'Shadow 3',
    sx: CommonSX,
  },
};

export const ShadowPaper4: Story = {
  args: {
    elevation: 4,
    children: 'Shadow 4',
    sx: CommonSX,
  },
};

export const ShadowPaper5: Story = {
  args: {
    elevation: 5,
    children: 'Shadow 5',
    sx: CommonSX,
  },
};

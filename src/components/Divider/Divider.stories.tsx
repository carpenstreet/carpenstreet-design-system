import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui.tsx';
import ExampleDivider from './ExampleDivider';

const meta: Meta<typeof ExampleDivider> = {
  title: 'Component/Divider',
  component: ExampleDivider,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleDivider>;

export const Default: Story = {
  args: {
    color: 200,
    orientation: 'horizontal',
    sx: {},
  },
};

export const DividerColor100AndHorizontal: Story = {
  args: {
    color: 100,
    orientation: 'horizontal',
    sx: {},
  },
};

export const DividerColor100AndVertical: Story = {
  args: {
    color: 100,
    orientation: 'vertical',
    sx: {},
  },
};

export const DividerColor200AndHorizontal: Story = {
  args: {
    color: 200,
    orientation: 'horizontal',
    sx: {},
  },
};

export const DividerColor200AndVertical: Story = {
  args: {
    color: 200,
    orientation: 'vertical',
    sx: {},
  },
};

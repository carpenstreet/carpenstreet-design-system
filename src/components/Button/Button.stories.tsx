import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import ThemeMui from '@shared/settings/ThemeMui.tsx';

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    size: 'L',
    color: 'default',
    disabled: false,
    weight: 'regular',
  },
  parameters: {
    controls: {
      exclude: ['startIcon', 'endIcon'],
    },
  },
};

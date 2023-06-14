import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { TButtonOn } from './Button.type';

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
  // argTypes: {
  //   on: { control: { include: ['light', 'dark'] } },
  //   color: { control: { include: ['primary', 'default'] } },
  //   style: { control: { include: ['filled', 'outlined'] }, if: { arg: 'color', eq: 'primary' } },
  // },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    on: 'light',
    color: 'primary',
    style: 'filled',
    size: 'M',
    activated: true,
    startIcon: false,
    endIcon: false,
    isLoading: false,
    width: 'auto',
    children: 'button',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';
import ThemeMui from '../../shared/settings/ThemeMui';

const meta: Meta<typeof Label> = {
  title: 'Component/Label',
  component: Label,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label',
    variant: 'filled',
    color: 'default',
    sx: {},
  },
};

export const FilledDefault: Story = {
  args: {
    children: 'Default',
    variant: 'filled',
    color: 'default',
  },
};

export const FilledPrimary: Story = {
  args: {
    children: 'Primary',
    variant: 'filled',
    color: 'primary',
  },
};

export const FilledInfo: Story = {
  args: {
    children: 'Info',
    variant: 'filled',
    color: 'info',
  },
};

export const FilledSuccess: Story = {
  args: {
    children: 'Success',
    variant: 'filled',
    color: 'success',
  },
};

export const FilledError: Story = {
  args: {
    children: 'Error',
    variant: 'filled',
    color: 'error',
  },
};

export const SoftDefault: Story = {
  args: {
    children: 'Default',
    variant: 'soft',
    color: 'default',
  },
};

export const SoftPrimary: Story = {
  args: {
    children: 'Primary',
    variant: 'soft',
    color: 'primary',
  },
};

export const SoftInfo: Story = {
  args: {
    children: 'Info',
    variant: 'soft',
    color: 'info',
  },
};

export const SoftSuccess: Story = {
  args: {
    children: 'Success',
    variant: 'soft',
    color: 'success',
  },
};

export const SoftError: Story = {
  args: {
    children: 'Error',
    variant: 'soft',
    color: 'error',
  },
};

export const OutlinedDefault: Story = {
  args: {
    children: 'Default',
    variant: 'outlined',
    color: 'default',
  },
};

export const OutlinedPrimary: Story = {
  args: {
    children: 'Primary',
    variant: 'outlined',
    color: 'primary',
  },
};

export const OutlinedInfo: Story = {
  args: {
    children: 'Info',
    variant: 'outlined',
    color: 'info',
  },
};

export const OutlinedSuccess: Story = {
  args: {
    children: 'Success',
    variant: 'outlined',
    color: 'success',
  },
};

export const OutlinedError: Story = {
  args: {
    children: 'Error',
    variant: 'outlined',
    color: 'error',
  },
};

export const SmallDefault: Story = {
  args: {
    children: 'N',
    variant: 'small',
    color: 'default',
  },
};

export const SmallPrimary: Story = {
  args: {
    children: 'N',
    variant: 'small',
    color: 'primary',
  },
};

export const SmallInfo: Story = {
  args: {
    children: 'N',
    variant: 'small',
    color: 'info',
  },
};

export const SmallSuccess: Story = {
  args: {
    children: 'N',
    variant: 'small',
    color: 'success',
  },
};

export const SmallError: Story = {
  args: {
    children: 'N',
    variant: 'small',
    color: 'error',
  },
};

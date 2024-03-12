import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import ThemeMui from '@shared/settings/ThemeMui.tsx';
import { ChevronLeftIcon, ChevronRightIcon } from '@components';

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

const commonArgs = {
  children: 'button',
  variant: 'contained',
  size: 'L',
  color: 'default',
  disabled: false,
  weight: 'regular',
} as const;

const excludedParameters = {
  parameters: {
    controls: {
      exclude: ['startIcon', 'endIcon'],
    },
  },
};

export const Default: Story = {
  args: {
    ...commonArgs,
  },
  ...excludedParameters,
};

export const StartAndEnd: Story = {
  args: {
    ...commonArgs,
    startIcon: <ChevronLeftIcon color={'color/green/500'} />,
    endIcon: <ChevronRightIcon color={'color/green/500'} />,
  },
  ...excludedParameters,
};

export const Start: Story = {
  args: {
    ...commonArgs,
    startIcon: <ChevronLeftIcon color={'color/green/500'} />,
  },
  ...excludedParameters,
};

export const End: Story = {
  args: {
    ...commonArgs,
    endIcon: <ChevronRightIcon color={'color/green/500'} />,
  },
  ...excludedParameters,
};

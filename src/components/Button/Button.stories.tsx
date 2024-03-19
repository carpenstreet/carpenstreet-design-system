import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import ThemeMui from '@shared/settings/ThemeMui.tsx';
import { ChevronLeftIcon, ChevronRightIcon } from '@components';
import { ButtonProps } from '@components/Button/Button.types.ts';

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
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
    sx: {},
  },
};

// contained

export const ContainedDefaultMedium: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
  },
};

export const ContainedDefaultMediumIcon: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const ContainedPrimaryMedium: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
  },
};

export const ContainedPrimaryMediumIcon: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const ContainedMediumDisabled: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
  },
};

export const ContainedMediumDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

// outlined
export const OutlinedDefaultMedium: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
  },
};

export const OutlinedDefaultMediumIcon: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const OutlinedPrimaryMedium: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
  },
};

export const OutlinedPrimaryMediumIcon: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const OutlinedMediumDisabled: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
  },
};

export const OutlinedMediumDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

// text
export const TextDefaultMedium: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
  },
};

export const TextDefaultMediumBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: false,
  },
};

export const TextDefaultMediumIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextDefaultMediumIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextPrimaryMedium: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
  },
};

export const TextPrimaryMediumBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'M',
    weight: 'bold',
    disabled: false,
  },
};

export const TextPrimaryMediumIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextPrimaryMediumIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextGrayMedium: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'M',
    weight: 'regular',
    disabled: false,
  },
};

export const TextGrayMediumBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'M',
    weight: 'bold',
    disabled: false,
  },
};

export const TextGrayMediumIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextGrayMediumIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextMediumDisabled: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
  },
};

export const TextMediumDisabledBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: true,
  },
};

export const TextMediumDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextMediumDisabledIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

// underlined

export const UnderlinedDefaultMedium: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
  },
};

export const UnderlinedDefaultMediumBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: false,
  },
};

export const UnderlinedDefaultMediumIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedDefaultMediumIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedPrimaryMedium: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
  },
};

export const UnderlinedPrimaryMediumBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'M',
    weight: 'bold',
    disabled: false,
  },
};

export const UnderlinedPrimaryMediumIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedPrimaryMediumIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedGrayMedium: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'M',
    weight: 'regular',
    disabled: false,
  },
};

export const UnderlinedGrayMediumBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'M',
    weight: 'bold',
    disabled: false,
  },
};

export const UnderlinedGrayMediumIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'M',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedGrayMediumIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'M',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedMediumDisabled: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
  },
};

export const UnderlinedMediumDisabledBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: true,
  },
};

export const UnderlinedMediumDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedMediumDisabledIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'M',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

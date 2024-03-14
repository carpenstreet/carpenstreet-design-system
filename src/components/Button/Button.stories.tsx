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

export const Default: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
    sx: {},
  },
};

// contained

export const ContainedDefaultLarge: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
  },
};

export const ContainedDefaultLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

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

export const ContainedDefaultSmall: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
  },
};

export const ContainedDefaultSmallIcon: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const ContainedPrimaryLarge: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false,
  },
};

export const ContainedPrimaryLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'L',
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

export const ContainedPrimarySmall: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
  },
};

export const ContainedPrimarySmallIcon: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const ContainedLargeDisabled: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
  },
};

export const ContainedLargeDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
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

export const ContainedSmallDisabled: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
  },
};

export const ContainedSmallDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'contained',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

// outlined

export const OutlinedDefaultLarge: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
  },
};

export const OutlinedDefaultLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

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

export const OutlinedDefaultSmall: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
  },
};

export const OutlinedDefaultSmallIcon: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const OutlinedPrimaryLarge: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false,
  },
};

export const OutlinedPrimaryLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'L',
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

export const OutlinedPrimarySmall: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
  },
};

export const OutlinedPrimarySmallIcon: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const OutlinedLargeDisabled: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
  },
};

export const OutlinedLargeDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
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

export const OutlinedSmallDisabled: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
  },
};

export const OutlinedSmallDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'outlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

// text
export const TextDefaultExtraLarge: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'regular',
    disabled: false,
  },
};

export const TextDefaultExtraLargeBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'bold',
    disabled: false,
  },
};

export const TextDefaultExtraLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextDefaultExtraLargeIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextDefaultLarge: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
  },
};
export const TextDefaultLargeBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: false,
  },
};

export const TextDefaultLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextDefaultLargeIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

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

export const TextDefaultSmall: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
  },
};

export const TextDefaultSmallBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: false,
  },
};

export const TextDefaultSmallIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextDefaultSmallIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextPrimaryExtraLarge: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'XL',
    weight: 'regular',
    disabled: false,
  },
};

export const TextPrimaryExtraLargeBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'XL',
    weight: 'bold',
    disabled: false,
  },
};

export const TextPrimaryExtraLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'XL',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextPrimaryExtraLargeIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'XL',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextPrimaryLarge: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false,
  },
};
export const TextPrimaryLargeBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'L',
    weight: 'bold',
    disabled: false,
  },
};

export const TextPrimaryLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextPrimaryLargeIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'L',
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

export const TextPrimarySmall: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
  },
};

export const TextPrimarySmallBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'S',
    weight: 'bold',
    disabled: false,
  },
};

export const TextPrimarySmallIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextPrimarySmallIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'primary',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextGrayExtraLarge: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'XL',
    weight: 'regular',
    disabled: false,
  },
};

export const TextGrayExtraLargeBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'XL',
    weight: 'bold',
    disabled: false,
  },
};

export const TextGrayExtraLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'XL',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextGrayExtraLargeIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'XL',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextGrayLarge: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'L',
    weight: 'regular',
    disabled: false,
  },
};
export const TextGrayLargeBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'L',
    weight: 'bold',
    disabled: false,
  },
};

export const TextGrayLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextGrayLargeIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'L',
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

export const TextGraySmall: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'S',
    weight: 'regular',
    disabled: false,
  },
};

export const TextGraySmallBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'S',
    weight: 'bold',
    disabled: false,
  },
};

export const TextGraySmallIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextGraySmallIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'gray',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextExtraLargeDisabled: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'regular',
    disabled: true,
  },
};

export const TextExtraLargeDisabledBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'bold',
    disabled: true,
  },
};

export const TextExtraLargeDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextExtraLargeDisabledIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'XL',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextLargeDisabled: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
  },
};
export const TextLargeDisabledBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: true,
  },
};

export const TextLargeDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextLargeDisabledIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: true,
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

export const TextSmallDisabled: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
  },
};

export const TextSmallDisabledBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: true,
  },
};

export const TextSmallDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const TextSmallDisabledIconBold: Story = {
  args: {
    children: 'button',
    variant: 'text',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

// underlined

export const UnderlinedDefaultLarge: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
  },
};
export const UnderlinedDefaultLargeBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: false,
  },
};

export const UnderlinedDefaultLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedDefaultLargeIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

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

export const UnderlinedDefaultSmall: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
  },
};

export const UnderlinedDefaultSmallBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: false,
  },
};

export const UnderlinedDefaultSmallIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedDefaultSmallIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedPrimaryLarge: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false,
  },
};
export const UnderlinedPrimaryLargeBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'L',
    weight: 'bold',
    disabled: false,
  },
};

export const UnderlinedPrimaryLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedPrimaryLargeIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'L',
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

export const UnderlinedPrimarySmall: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
  },
};

export const UnderlinedPrimarySmallBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'S',
    weight: 'bold',
    disabled: false,
  },
};

export const UnderlinedPrimarySmallIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedPrimarySmallIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'primary',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedGrayLarge: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'L',
    weight: 'regular',
    disabled: false,
  },
};
export const UnderlinedGrayLargeBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'L',
    weight: 'bold',
    disabled: false,
  },
};

export const UnderlinedGrayLargeIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'L',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedGrayLargeIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'L',
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

export const UnderlinedGraySmall: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'S',
    weight: 'regular',
    disabled: false,
  },
};

export const UnderlinedGraySmallBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'S',
    weight: 'bold',
    disabled: false,
  },
};

export const UnderlinedGraySmallIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'S',
    weight: 'regular',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedGraySmallIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'gray',
    size: 'S',
    weight: 'bold',
    disabled: false,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedLargeDisabled: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
  },
};
export const UnderlinedLargeDisabledBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: true,
  },
};

export const UnderlinedLargeDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedLargeDisabledIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'L',
    weight: 'bold',
    disabled: true,
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

export const UnderlinedSmallDisabled: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
  },
};

export const UnderlinedSmallDisabledBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: true,
  },
};

export const UnderlinedSmallDisabledIcon: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'regular',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

export const UnderlinedSmallDisabledIconBold: Story = {
  args: {
    children: 'button',
    variant: 'underlined',
    color: 'default',
    size: 'S',
    weight: 'bold',
    disabled: true,
    startIcon: <ChevronLeftIcon />,
    endIcon: <ChevronRightIcon />,
  },
};

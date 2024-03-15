import { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';
import ThemeMui from '@shared/settings/ThemeMui.tsx';
import CategoryIcon from '@components/Icon/Cateogry/CategoryIcon.tsx';

const meta: Meta<typeof IconButton> = {
  title: 'Component/IconButton',
  component: IconButton,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    children: <CategoryIcon />,
    color: 'default',
    size: 'M',
    disabled: false,
    sx: {},
  },
};

export const DefaultMedium: Story = {
  args: {
    children: <CategoryIcon />,
    color: 'default',
    size: 'M',
    disabled: false,
    sx: {},
  },
};

export const DefaultSmall: Story = {
  args: {
    children: <CategoryIcon />,
    color: 'default',
    size: 'M',
    disabled: false,
    sx: {},
  },
};

export const PrimaryMedium: Story = {
  args: {
    children: <CategoryIcon />,
    color: 'primary',
    size: 'M',
    disabled: false,
    sx: {},
  },
};

export const PrimarySmall: Story = {
  args: {
    children: <CategoryIcon />,
    color: 'primary',
    size: 'S',
    disabled: false,
    sx: {},
  },
};

export const DisabledMedium: Story = {
  args: {
    children: <CategoryIcon />,
    color: 'default',
    size: 'M',
    disabled: true,
    sx: {},
  },
};

export const DisabledSmall: Story = {
  args: {
    children: <CategoryIcon />,
    color: 'default',
    size: 'S',
    disabled: true,
    sx: {},
  },
};

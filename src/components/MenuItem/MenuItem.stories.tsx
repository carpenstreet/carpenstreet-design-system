import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui.tsx';
import ExampleMenuItem from './ExampleMenuItem.tsx';

const meta: Meta<typeof ExampleMenuItem> = {
  title: 'Component/MenuItem',
  component: ExampleMenuItem,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleMenuItem>;

export const Default: Story = {
  args: {
    selected: false,
    disabled: false,
    children: 'Menu Item',
    sx: {},
  },
};

export const DefaultMenuItem: Story = {
  args: {
    selected: false,
    disabled: false,
    children: 'Default',
    sx: {},
  },
};

export const SelectedMenuItem: Story = {
  args: {
    selected: true,
    disabled: false,
    children: 'Selected',
    sx: {},
  },
};

export const DisabledMenuItem: Story = {
  args: {
    selected: false,
    disabled: true,
    children: 'Disabled',
    sx: {},
  },
};

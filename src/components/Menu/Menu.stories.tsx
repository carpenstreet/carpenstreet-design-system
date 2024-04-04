import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui.tsx';
import ExampleMenu from './ExampleMenu.tsx';

const meta: Meta<typeof ExampleMenu> = {
  title: 'Component/Menu',
  component: ExampleMenu,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleMenu>;

export const Default: Story = {
  args: {
    fullWidth: false,
    width: undefined,
    paperSx: {},
    sx: {},
  },
};

export const FixedMenuWithScrollLeft: Story = {
  args: {
    width: 300,
  },
};

export const FixedMenuWithScrollRight: Story = {
  args: {
    width: 100,
  },
};

export const HugMenuWithScroll: Story = {
  args: {},
};

export const FullWidthMenu: Story = {
  args: {
    fullWidth: true,
  },
};

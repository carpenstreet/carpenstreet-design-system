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
    paperSx: { height: '160px' },
    sx: {},
  },
};

export const FixedMenuWithScrollLeft: Story = {
  args: {
    width: 300,
    paperSx: { height: '160px' },
  },
};

export const FixedMenuWithScrollRight: Story = {
  args: {
    width: 100,
    paperSx: { height: '160px' },
  },
};

export const HugMenuWithScroll: Story = {
  args: {
    paperSx: { height: '160px' },
  },
};

export const FullWidthMenu: Story = {
  args: {
    fullWidth: true,
    paperSx: { height: '160px' },
  },
};

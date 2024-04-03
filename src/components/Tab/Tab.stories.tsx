import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui';
import Tab from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Component/Tab',
  component: Tab,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    label: 'Label',
    size: 'L',
    disabled: false,
    sx: {},
  },
};

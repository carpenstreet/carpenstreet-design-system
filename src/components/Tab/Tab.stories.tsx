import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui';
import ExampleTabs from './ExampleTabs';

const meta: Meta<typeof ExampleTabs> = {
  title: 'Component/Tab',
  component: ExampleTabs,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleTabs>;

export const Default: Story = {
  args: {
    label: 'Look At Me!',
    size: 'L',
    disabled: false,
    sx: {},
  },
};

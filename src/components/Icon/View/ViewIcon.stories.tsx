import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '@shared/settings/ThemeMui';
import ViewIcon from './ViewIcon';

const meta: Meta = {
  title: 'Foundation/Icon/View',
  component: ViewIcon,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ViewIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '@shared/settings/ThemeMui';
import VVIPIcon from './VVIPIcon';

const meta: Meta = {
  title: 'Foundation/Icon/VVIP',
  component: VVIPIcon,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof VVIPIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

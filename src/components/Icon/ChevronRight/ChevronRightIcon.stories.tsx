import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui';
import ChevronRightIcon from './ChevronRightIcon';

const meta: Meta = {
  title: 'Foundation/Icon/ChevronRight',
  component: ChevronRightIcon,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ChevronRightIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

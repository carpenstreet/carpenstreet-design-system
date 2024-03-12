import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '@shared/settings/ThemeMui';
import ArrowLeftIcon from './ArrowLeftIcon';

const meta: Meta = {
  title: 'Foundation/Icon/ArrowLeft',
  component: ArrowLeftIcon,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ArrowLeftIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

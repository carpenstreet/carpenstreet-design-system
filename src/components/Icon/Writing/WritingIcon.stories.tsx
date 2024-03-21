import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui';
import WritingIcon from './WritingIcon';

const meta: Meta = {
  title: 'Foundation/Icon/Writing',
  component: WritingIcon,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof WritingIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

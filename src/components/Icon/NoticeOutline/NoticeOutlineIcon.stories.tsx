import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '@shared/settings/ThemeMui';
import NoticeOutlineIcon from './NoticeOutlineIcon';

const meta: Meta = {
  title: 'Foundation/Icon/NoticeOutline',
  component: NoticeOutlineIcon,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NoticeOutlineIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

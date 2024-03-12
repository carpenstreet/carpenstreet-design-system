import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '@shared/settings/ThemeMui';
import CategoryIcon from './CategoryIcon';

const meta: Meta = {
  title: 'Foundation/Icon/Category',
  component: CategoryIcon,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CategoryIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/black',
  },
};

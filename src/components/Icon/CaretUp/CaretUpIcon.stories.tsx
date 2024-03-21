import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui';
import CaretUpIcon from './CaretUpIcon';

const meta: Meta = {
  title: 'Foundation/Icon/CaretUp',
  component: CaretUpIcon,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CaretUpIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

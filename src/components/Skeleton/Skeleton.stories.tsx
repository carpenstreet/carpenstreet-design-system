import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui';
import Skeleton from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Component/Skeleton',
  component: Skeleton,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
  argTypes: {
    variant: {
      default: 'text',
      table: {
        defaultValue: {
          summary: 'text',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 210,
    height: 16,
    variant: 'text',
  },
};

export const TextSkeleton: Story = {
  args: {
    width: 210,
    variant: 'text',
  },
};

export const CircularSkeleton: Story = {
  args: {
    width: 40,
    height: 40,
    variant: 'circular',
  },
};

export const RectangularSkeleton: Story = {
  args: {
    width: 210,
    height: 60,
    variant: 'rectangular',
  },
};

export const RoundedSkeleton: Story = {
  args: {
    width: 210,
    height: 80,
    variant: 'rounded',
  },
};

import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui.tsx';
import Pagination from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Component/Pagination',
  component: Pagination,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    size: 'L',
    count: 10,
    sx: {},
  },
};

export const MediumPagination: Story = {
  args: {
    size: 'M',
    count: 10,
    sx: {},
  },
};

export const LargePagination: Story = {
  args: {
    size: 'L',
    count: 10,
    sx: {},
  },
};

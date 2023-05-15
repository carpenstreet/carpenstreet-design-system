import { Meta, StoryObj } from '@storybook/react';
import AccommodationsIcon from './AccommodationsIcon';

const meta: Meta = { title: 'Icon/Category/숙박시설', component: AccommodationsIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof AccommodationsIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

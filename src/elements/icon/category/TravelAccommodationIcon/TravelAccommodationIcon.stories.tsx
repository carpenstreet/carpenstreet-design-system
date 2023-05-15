import { Meta, StoryObj } from '@storybook/react';
import TravelAccommodationIcon from './TravelAccommodationIcon';

const meta: Meta = { title: 'Elements/Icon/Category/여행숙박', component: TravelAccommodationIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof TravelAccommodationIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

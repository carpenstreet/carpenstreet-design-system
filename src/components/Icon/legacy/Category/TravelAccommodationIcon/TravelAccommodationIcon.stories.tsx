import { Meta, StoryObj } from '@storybook/react';
import TravelAccommodationIcon from './TravelAccommodationIcon.tsx';

const meta: Meta = { title: 'Element/Icon/Category/여행숙박', component: TravelAccommodationIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof TravelAccommodationIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

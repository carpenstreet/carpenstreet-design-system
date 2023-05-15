import { Meta, StoryObj } from '@storybook/react';
import CarVehicleIcon from './CarVehicleIcon';

const meta: Meta = { title: 'Element/Icon/Category/차량탈것', component: CarVehicleIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CarVehicleIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

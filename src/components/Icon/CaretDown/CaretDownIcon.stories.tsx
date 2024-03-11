import { Meta, StoryObj } from '@storybook/react';
import CaretDownIcon from './CaretDownIcon';

const meta: Meta = { title: 'Element/Icon/CaretDown', component: CaretDownIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CaretDownIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

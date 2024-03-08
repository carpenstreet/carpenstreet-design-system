import { Meta, StoryObj } from '@storybook/react';
import PropAnimalIcon from './PropAnimalIcon';

const meta: Meta = { title: 'Element/Icon/Category/소품동물', component: PropAnimalIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof PropAnimalIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

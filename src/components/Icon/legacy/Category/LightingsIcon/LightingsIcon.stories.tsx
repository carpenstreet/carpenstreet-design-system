import { Meta, StoryObj } from '@storybook/react';
import LightingsIcon from './LightingsIcon.tsx';

const meta: Meta = { title: 'Element/Icon/Category/조명모음', component: LightingsIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof LightingsIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

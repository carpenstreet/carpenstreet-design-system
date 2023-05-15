import { Meta, StoryObj } from '@storybook/react';
import ChairsIcon from './ChairsIcon';

const meta: Meta = { title: 'Icon/Category/의자모음', component: ChairsIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ChairsIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

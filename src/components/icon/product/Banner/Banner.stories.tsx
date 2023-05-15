import { Meta, StoryObj } from '@storybook/react';
import Banner from './Banner';

const meta: Meta = { title: '공사필요/Banner', component: Banner, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Banner>;

export const Type1: Story = {
  args: {
    size: 32,
    type: 1,
  },
};
export const Type2: Story = {
  args: {
    size: 32,
    type: 2,
  },
};
export const Type3: Story = {
  args: {
    size: 32,
    type: 3,
  },
};
export const Type4: Story = {
  args: {
    size: 32,
    type: 4,
  },
};

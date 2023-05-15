import { Meta, StoryObj } from '@storybook/react';
import ScrapIcon from './ScrapIcon';

const meta: Meta = { title: '공사필요/ScrapIcon', component: ScrapIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ScrapIcon>;

export const Type1: Story = {
  args: {
    size: 24,
    type: 1,
  },
};
export const Type2: Story = {
  args: {
    size: 24,
    type: 2,
  },
};
export const Type3: Story = {
  args: {
    size: 24,
    type: 3,
  },
};
export const Type4: Story = {
  args: {
    size: 24,
    type: 4,
  },
};

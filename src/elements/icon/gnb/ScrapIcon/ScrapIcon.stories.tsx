import { Meta, StoryObj } from '@storybook/react';
import ScrapIcon from './ScrapIcon';

const meta: Meta = { title: 'Elements/Icon/Gnb/ScrapIcon', component: ScrapIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ScrapIcon>;

export const Unchecked: Story = {
  args: {
    size: 24,
    isFilled: false,
  },
};

export const Checked: Story = {
  args: {
    size: 24,
    isFilled: true,
  },
};

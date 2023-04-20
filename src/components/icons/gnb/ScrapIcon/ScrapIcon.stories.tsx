import { Meta, StoryObj } from '@storybook/react';
import ScrapIcon from '@components/icons/gnb/ScrapIcon/ScrapIcon';

const meta: Meta = { title: 'ScrapIcon', component: ScrapIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ScrapIcon>;

export const Unchecked: Story = {
  args: {
    isFilled: false,
  },
};

export const Checked: Story = {
  args: {
    isFilled: true,
  },
};

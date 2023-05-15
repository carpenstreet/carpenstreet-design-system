import { Meta, StoryObj } from '@storybook/react';
import CouponIcon from './CouponIcon';

const meta: Meta = { title: 'Elements/Icon/Sign/CouponIcon', component: CouponIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CouponIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};

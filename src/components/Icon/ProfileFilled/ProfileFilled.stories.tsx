import { Meta, StoryObj } from '@storybook/react';
import ProfileFilledIcon from './ProfileFilled';

const meta: Meta = { title: 'Element/Icon/ProfileFilled', component: ProfileFilledIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ProfileFilledIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: '#313135'
  },
};

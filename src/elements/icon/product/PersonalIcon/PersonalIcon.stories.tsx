import { Meta, StoryObj } from '@storybook/react';
import PersonalIcon from './PersonalIcon';

const meta: Meta = { title: 'Elements/Icon/Product/PersonalIcon', component: PersonalIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof PersonalIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};

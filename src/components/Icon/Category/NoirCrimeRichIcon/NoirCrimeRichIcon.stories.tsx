import { Meta, StoryObj } from '@storybook/react';
import NoirCrimeRichIcon from './NoirCrimeRichIcon';

const meta: Meta = { title: 'Element/Icon/Category/느와르범죄재벌', component: NoirCrimeRichIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof NoirCrimeRichIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

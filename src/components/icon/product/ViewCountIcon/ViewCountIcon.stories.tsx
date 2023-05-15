import { Meta, StoryObj } from '@storybook/react';
import ViewCountIcon from './ViewCountIcon';

const meta: Meta = { title: 'Icon/Product/ViewCountIcon', component: ViewCountIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ViewCountIcon>;

export const Default: Story = {
  args: {
    size: 12,
  },
};

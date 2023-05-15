import { Meta, StoryObj } from '@storybook/react';
import ExtraIcon from './ExtraIcon';

const meta: Meta = { title: 'Element/Icon/Category/엑스트라', component: ExtraIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ExtraIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

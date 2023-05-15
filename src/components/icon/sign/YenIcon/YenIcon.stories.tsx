import { Meta, StoryObj } from '@storybook/react';
import YenIcon from './YenIcon';

const meta: Meta = { title: 'Element/Icon/Sign/YenIcon', component: YenIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof YenIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};

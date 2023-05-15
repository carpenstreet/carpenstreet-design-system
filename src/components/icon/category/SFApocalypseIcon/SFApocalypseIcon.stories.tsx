import { Meta, StoryObj } from '@storybook/react';
import SFApocalypseIcon from './SFApocalypseIcon';

const meta: Meta = { title: 'Icon/Category/SF아포칼립스', component: SFApocalypseIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof SFApocalypseIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

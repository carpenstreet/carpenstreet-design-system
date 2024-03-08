import { Meta, StoryObj } from '@storybook/react';
import SFApocalypseIcon from './SFApocalypseIcon.tsx';

const meta: Meta = { title: 'Element/Icon/Category/SF아포칼립스', component: SFApocalypseIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof SFApocalypseIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

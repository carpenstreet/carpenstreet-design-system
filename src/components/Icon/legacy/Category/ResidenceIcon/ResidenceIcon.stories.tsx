import { Meta, StoryObj } from '@storybook/react';
import ResidenceIcon from './ResidenceIcon.tsx';

const meta: Meta = { title: 'Element/Icon/Category/거주지', component: ResidenceIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ResidenceIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

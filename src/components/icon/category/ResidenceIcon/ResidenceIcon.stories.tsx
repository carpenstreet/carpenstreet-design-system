import { Meta, StoryObj } from '@storybook/react';
import ResidenceIcon from './ResidenceIcon';

const meta: Meta = { title: 'Icon/Category/거주지', component: ResidenceIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof ResidenceIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

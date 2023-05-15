import { Meta, StoryObj } from '@storybook/react';
import FantasyMedievalIcon from './FantasyMedievalIcon';

const meta: Meta = { title: 'Icon/Category/판타지중세', component: FantasyMedievalIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof FantasyMedievalIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

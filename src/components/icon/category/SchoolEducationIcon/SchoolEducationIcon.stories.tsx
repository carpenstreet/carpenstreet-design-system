import { Meta, StoryObj } from '@storybook/react';
import SchoolEducationIcon from './SchoolEducationIcon';

const meta: Meta = { title: 'Icon/Category/학교교육', component: SchoolEducationIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof SchoolEducationIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

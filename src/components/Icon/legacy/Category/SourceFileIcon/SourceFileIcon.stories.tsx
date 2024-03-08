import { Meta, StoryObj } from '@storybook/react';
import SourceFileIcon from './SourceFileIcon.tsx';

const meta: Meta = { title: 'Element/Icon/Category/소스파일', component: SourceFileIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof SourceFileIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

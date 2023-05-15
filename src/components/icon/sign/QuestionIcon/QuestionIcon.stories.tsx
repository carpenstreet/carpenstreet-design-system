import { Meta, StoryObj } from '@storybook/react';
import QuestionIcon from './QuestionIcon';

const meta: Meta = { title: 'Element/Icon/Sign/QuestionIcon', component: QuestionIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof QuestionIcon>;

export const Filled: Story = {
  args: {
    size: 24,
    isFilled: true,
  },
};
export const Outlined: Story = {
  args: {
    size: 24,
    isFilled: false,
  },
};

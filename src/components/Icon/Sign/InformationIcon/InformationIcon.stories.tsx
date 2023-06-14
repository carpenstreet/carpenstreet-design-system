import { Meta, StoryObj } from '@storybook/react';
import InformationIcon from './InformationIcon';

const meta: Meta = { title: 'Element/Icon/Sign/InformationIcon', component: InformationIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof InformationIcon>;

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

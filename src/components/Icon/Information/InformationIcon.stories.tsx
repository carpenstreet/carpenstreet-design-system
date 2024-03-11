import { Meta, StoryObj } from '@storybook/react';
import InformationIcon from './InformationIcon';

const meta: Meta = { title: 'Element/Icon/Information', component: InformationIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof InformationIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

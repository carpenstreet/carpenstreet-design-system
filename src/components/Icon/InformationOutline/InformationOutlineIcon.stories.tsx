import { Meta, StoryObj } from '@storybook/react';
import InformationOutlineIcon from './InformationOutlineIcon';

const meta: Meta = { title: 'Element/Icon/InformationOutline', component: InformationOutlineIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof InformationOutlineIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

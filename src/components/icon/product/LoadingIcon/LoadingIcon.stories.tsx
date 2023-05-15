import { Meta, StoryObj } from '@storybook/react';
import LoadingIcon from './LoadingIcon';

const meta: Meta = { title: 'Element/Icon/Product/LoadingIcon', component: LoadingIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof LoadingIcon>;

export const Default: Story = {
    args: {
        size: 24
    }
}

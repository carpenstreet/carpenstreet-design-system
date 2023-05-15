import { Meta, StoryObj } from '@storybook/react';
import LicenseIcon from './LicenseIcon';

const meta: Meta = { title: 'Elements/Icon/Product/LicenseIcon', component: LicenseIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof LicenseIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};

import { Meta, StoryObj } from '@storybook/react';
import SettingIcon from './SettingIcon';

const meta: Meta = { title: 'Icon/Product/SettingIcon', component: SettingIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof SettingIcon>;

export const Default: Story = {
  args: {
    size: 24,
  },
};

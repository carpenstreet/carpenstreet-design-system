import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';
import ThemeMui from '../../shared/settings/ThemeMui.tsx';

const meta: Meta<typeof Checkbox> = {
  title: 'Component/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    color: 'default',
    size: 'M',
    disabled: false,
    indeterminate: false,
  },
};

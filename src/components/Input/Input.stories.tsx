import { Meta, StoryObj } from '@storybook/react';
import Input from './Input';
import ThemeMui from '@shared/settings/ThemeMui';

const meta: Meta<typeof Input> = {
  title: 'Component/Input',
  component: Input,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    variant: 'outlined',
    size: 'M',

    // text
    helperText: '',
    placeholder: 'Placeholder',
    label: 'Label',

    // status
    error: false,
    disabled: false,
  },
};

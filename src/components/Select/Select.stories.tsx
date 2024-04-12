import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui';
import ExampleSelect from './ExampleSelect';

const meta: Meta<typeof ExampleSelect> = {
  title: 'Component/Select',
  component: ExampleSelect,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleSelect>;

export const Default: Story = {
  args: {
    size: 'M',
    label: 'Label',
    helperText: '',
    success: false,
    error: false,
    disabled: false,
    withHelperTextIcon: false,
    sx: {
      width: '320px',
    },
  },
};

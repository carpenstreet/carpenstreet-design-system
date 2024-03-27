import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui';
import ExampleTextField from './ExampleTextField';
import { BoxIcon, ViewIcon } from '../Icon';

const meta: Meta = {
  title: 'Component/TextField',
  component: ExampleTextField,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleTextField>;

export const Default: Story = {
  args: {
    variant: 'outlined',
    size: 'M',
    label: 'Label',
    helperText: 'Helper Text...',
    withHelperTextIcon: true,
    success: false,
    error: false,
    disabled: false,
    InputProps: {
      startAdornment: <BoxIcon />,
      endAdornment: <ViewIcon />,
    },
    sx: {
      width: '320px',
    },
  },
};

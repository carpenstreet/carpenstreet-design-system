import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui';
import TextField from './TextField.tsx';
import { InformationIcon, InformationOutlineIcon } from '../Icon';

const meta: Meta = {
  title: 'Component/TextField',
  component: TextField,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    variant: 'outlined',
    label: 'Label',
    size: 'M',
    success: false,
    error: false,
    disabled: false,
    // startIcon: <InformationIcon />,
    // endIcon: <InformationOutlineIcon />,
    withHelperTextIcon: true,
    helperText: 'asdf',
    sx: {
      width: '320px',
    },
  },
};

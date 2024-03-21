import { Meta, StoryObj } from '@storybook/react';
import Label from './Label';
import ThemeMui from '../../shared/settings/ThemeMui';

const meta: Meta<typeof Label> = {
  title: 'Component/Label',
  component: Label,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
  },
};

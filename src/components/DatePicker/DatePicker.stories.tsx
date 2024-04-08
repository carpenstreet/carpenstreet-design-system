import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui';
import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Component/DatePicker',
  component: DatePicker,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};

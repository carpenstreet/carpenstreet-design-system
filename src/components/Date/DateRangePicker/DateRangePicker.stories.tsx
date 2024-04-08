import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui.tsx';
import DateRangePicker from './DateRangePicker.tsx';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Component/DateRangePicker',
  component: DateRangePicker,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {};

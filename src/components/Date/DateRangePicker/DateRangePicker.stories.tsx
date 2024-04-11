import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui.tsx';
import ExampleDateRangePicker from './ExampleDateRangePicker.tsx';

const meta: Meta<typeof ExampleDateRangePicker> = {
  title: 'Component/DateRangePicker',
  component: ExampleDateRangePicker,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleDateRangePicker>;

export const Default: Story = {
  args: {
    locale: 'ko',
  },
};

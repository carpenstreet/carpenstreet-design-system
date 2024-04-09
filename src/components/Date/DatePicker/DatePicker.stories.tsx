import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui.tsx';
import ExampleDatePicker from './ExampleDatePicker.tsx';

const meta: Meta<typeof ExampleDatePicker> = {
  title: 'Component/DatePicker',
  component: ExampleDatePicker,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleDatePicker>;

export const Default: Story = {};

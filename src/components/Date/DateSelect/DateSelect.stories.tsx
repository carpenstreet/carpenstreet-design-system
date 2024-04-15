import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui.tsx';
import ExampleDateSelect from './ExampleDateSelect.tsx';

const meta: Meta<typeof ExampleDateSelect> = {
  title: 'Component/DateSelect',
  component: ExampleDateSelect,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleDateSelect>;

export const Default: Story = {
  args: {
    locale: 'ko',
    isRange: false,
    focused: false,
    error: false,
    disabled: false,
  },
};

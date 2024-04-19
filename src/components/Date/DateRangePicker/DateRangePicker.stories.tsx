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
    sx: {},
    toolbarSx: {},
    dayLabelSx: {},
    monthPickerSx: {},
    yearPickerSx: {},
    contentSx: {},
  },
};

export const Container: Story = {
  args: {
    locale: 'ko',
    sx: {
      border: `2px solid #4e4eff`,
    },
  },
};

export const Toolbar: Story = {
  args: {
    locale: 'ko',
    toolbarSx: {
      border: `2px solid #4e4eff`,
      borderRadius: '8px',
    },
  },
};

export const DayLabel: Story = {
  args: {
    locale: 'ko',
    dayLabelSx: {
      border: `2px solid #4e4eff`,
      borderRadius: '8px',
    },
  },
};

export const MonthPicker: Story = {
  args: {
    locale: 'ko',
    monthPickerSx: {
      border: `2px solid #4e4eff`,
      borderRadius: '8px',
    },
  },
};

export const YearPicker: Story = {
  args: {
    locale: 'ko',
    yearPickerSx: {
      border: `2px solid #4e4eff`,
      borderRadius: '8px',
    },
  },
};

export const Content: Story = {
  args: {
    locale: 'ko',
    contentSx: {
      border: `2px solid #4e4eff`,
      borderRadius: '8px',
    },
  },
};

export const Controller: Story = {
  args: {
    locale: 'ko',
    controllerSx: {
      border: `2px solid #4e4eff`,
      borderRadius: '8px',
    },
    showController: true,
  },
};

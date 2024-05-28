import { Meta, StoryObj } from '@storybook/react';
import ExampleRadio from './ExampleRadio.tsx';
import ExampleRadioGroup from './ExampleRadioGroup.tsx';
import ThemeMui from '../../shared/settings/ThemeMui.tsx';

const meta: Meta<typeof ExampleRadio> = {
  title: 'Component/Radio',
  component: ExampleRadio,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleRadio>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        dark: true,
        language: 'tsx',
      },
    },
  },
  render: ExampleRadio,
  args: {
    color: 'default',
    size: 'M',
    disabled: false,
  },
};

export const RadioGroup: Story = {
  render: ExampleRadioGroup,
  args: {
    color: 'default',
    size: 'M',
    disabled: false,
  },
};

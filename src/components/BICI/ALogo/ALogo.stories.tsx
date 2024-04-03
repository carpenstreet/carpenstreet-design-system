import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui';
import ExampleALogo from './ExampleALogo';

const meta: Meta<typeof ExampleALogo> = {
  title: 'BI·CI/ALogo',
  component: ExampleALogo,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleALogo>;

export const Default: Story = {
  args: {
    variant: 'dark',
    width: undefined,
    height: undefined,
  },
};

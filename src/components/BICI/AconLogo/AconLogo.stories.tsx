import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui';
import ExampleAconLogo from './ExampleAconLogo';

const meta: Meta<typeof ExampleAconLogo> = {
  title: 'BI·CI/현AconLogo',
  component: ExampleAconLogo,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleAconLogo>;

export const Default: Story = {
  args: {
    type: 'white',
    width: null,
    height: null,
  },
};

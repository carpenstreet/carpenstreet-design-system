import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui';
import ExampleCarpenstreetLogo from './ExampleCarpenstreetLogo';

const meta: Meta<typeof ExampleCarpenstreetLogo> = {
  title: 'BI·CI/CarpenstreetLogo',
  component: ExampleCarpenstreetLogo,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleCarpenstreetLogo>;

export const Default: Story = {
  args: {
    color: 'black',
    width: 201,
    height: 50,
  },
};

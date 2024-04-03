import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui';
import PartnerhubLogo from './PartnerhubLogo';

const meta: Meta<typeof PartnerhubLogo> = {
  title: 'BI·CI/PartnerhubLogo',
  component: PartnerhubLogo,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PartnerhubLogo>;

export const Default: Story = {
  args: {
    width: 95,
    height: 48,
  },
};

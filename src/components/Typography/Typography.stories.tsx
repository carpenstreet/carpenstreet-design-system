import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import ThemeMui from '@shared/settings/ThemeMui.tsx';

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'Typography/Headline/H1/regular',
    children: '테스트',
  },
};

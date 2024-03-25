import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui';
import LabelPartnership from './LabelPartnership.tsx';

const meta: Meta = {
  title: 'Component/LabelPartnership',
  component: LabelPartnership,
  argTypes: {
    size: {
      table: {
        defaultValue: {
          summary: 'M',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LabelPartnership>;

export const Default: Story = {
  args: {
    partnership: 'vvip',
    size: 'M',
    sx: {},
  },
};

export const VVIPMedium: Story = {
  args: {
    partnership: 'vvip',
    size: 'M',
  },
};

export const VVIPSmall: Story = {
  args: {
    partnership: 'vvip',
    size: 'S',
  },
};

export const VIPMedium: Story = {
  args: {
    partnership: 'vip',
    size: 'M',
  },
};

export const VIPSmall: Story = {
  args: {
    partnership: 'vip',
    size: 'S',
  },
};

export const PartnerMedium: Story = {
  args: {
    partnership: 'partner',
    size: 'M',
  },
};

export const PartnerSmall: Story = {
  args: {
    partnership: 'partner',
    size: 'S',
  },
};

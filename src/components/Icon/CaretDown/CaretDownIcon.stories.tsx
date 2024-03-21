import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui';
import CaretDownIcon from './CaretDownIcon';

const meta: Meta = {
  title: 'Foundation/Icon/CaretDown',
  component: CaretDownIcon,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CaretDownIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

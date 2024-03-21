import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../../shared/settings/ThemeMui';
import InformationOutlineIcon from './InformationOutlineIcon';

const meta: Meta = {
  title: 'Foundation/Icon/InformationOutline',
  component: InformationOutlineIcon,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof InformationOutlineIcon>;

export const Default: Story = {
  args: {
    width: 24,
    height: 24,
    color: 'color/gray/800',
  },
};

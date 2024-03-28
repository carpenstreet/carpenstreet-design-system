import { Meta, StoryObj } from '@storybook/react';
import ExampleAvatar from './ExampleAvatar';
import ThemeMui from '../../shared/settings/ThemeMui.tsx';

const meta: Meta<typeof ExampleAvatar> = {
  title: 'Component/Avatar',
  component: ExampleAvatar,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleAvatar>;

export const Default: Story = {
  args: {
    src: 'https://m.media-amazon.com/images/M/MV5BNjI0MjJmYWUtNWVkYy00YmMxLTk3M2UtMjZlYWViMzM5ZjU0XkEyXkFqcGdeQXVyMTE0MzQwMjgz._V1_QL75_UY281_CR31,0,500,281_.jpg',
    alt: "Neytiri te Tskaha Mo'at'ite",
    sx: {},
  },
};

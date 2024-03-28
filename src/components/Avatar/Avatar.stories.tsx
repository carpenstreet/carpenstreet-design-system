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
    src: 'https://image.tmdb.org/t/p/w235_and_h235_face/hRKCbLuihYutWT50fvYpIwg38N8.jpg',
    alt: 'Wolfgang Güllich',
    sx: {},
  },
};

import { Meta, StoryObj } from '@storybook/react';
import CityLandscapeTrafficIcon from './CityLandscapeTrafficIcon';

const meta: Meta = { title: 'Element/Icon/Category/도시경관교통', component: CityLandscapeTrafficIcon, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof CityLandscapeTrafficIcon>;

export const Default: Story = {
  args: {
    size: 16,
  },
};

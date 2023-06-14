import { Meta, StoryObj } from '@storybook/react';
import Shadow from './Shadow';
import ThemeMui from '@shared/settings/ThemeMui';
import Button from '@components/Button/Button';

const meta: Meta = { title: 'Styles/Shadow', component: Shadow, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Shadow>;

export const Default: Story = {
  args: {
    variant: 24,
    children: <div style={{ width: 100, height: 100 }} />,
  },
};
Default.decorators = [(story) => <ThemeMui>{story()}</ThemeMui>];

import { Meta, StoryObj } from '@storybook/react';
import Letter from './Letter';
import ThemeMui from '@/shared/settings/ThemeMui';

const meta: Meta = { title: 'Foundation/Letter', component: Letter, tags: ['autodocs'] };

export default meta;
type Story = StoryObj<typeof Letter>;

export const Default: Story = {
  args: {
    variant: 'letter/en, ko/medium',
    color: 'color/red/500',
    children: '테스트 텍스트',
  },
};
Default.decorators = [(story) => <ThemeMui>{story()}</ThemeMui>];

import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui.tsx';
import ExampleIndicator from './ExampleIndicator.tsx';

const meta: Meta<typeof ExampleIndicator> = {
  title: 'Component/Indicator',
  component: ExampleIndicator,
  argTypes: {
    count: {
      description: '`Dot` 컴포넌트의 개수를 설정합니다.',
    },
    currentIndex: {
      control: false,
      description: '현재 활성화된 `Dot` 컴포넌트의 인덱스 번호입니다. 해당하는 `Dot` 컴포넌트는 color/primary/600의 배경색이 적용됩니다.',
      table: {
        defaultValue: {
          summary: '0',
        },
      },
    },
    dotProps: {
      description: '`Dot` 컴포넌트에 전달할 prop을 나타냅니다. Mui의 Box Props와 동일합니다.',
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
type Story = StoryObj<typeof ExampleIndicator>;

export const Default: Story = {
  args: {
    count: 3,
    currentIndex: 0,
    sx: {},
    dotProps: {},
  },
};

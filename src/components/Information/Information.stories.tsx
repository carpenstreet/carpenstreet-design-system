import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui';
import Information from './Information';
import Typography from '../Typography/Typography.tsx';

const meta: Meta<typeof Information> = {
  title: 'Component/Information',
  component: Information,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

const Contents = (
  <Typography variant={'typography/body/small/medium'}>
    내일은 없다 -윤동주
    <br />
    내일 내일 하기에 물었더니 밤을 자고 동틀 때 내일이라고
    <br />
    새 날을 찾던 나는 잠을 자고 돌아보니 그 때는 내일이 아니라 오늘이더라
    <br />
    무리여! 동무여! 내일은 없나니
  </Typography>
);

export default meta;
type Story = StoryObj<typeof Information>;

export const Default: Story = {
  args: {
    variant: 'default',
    contents: Contents,
    iconToTop: false,
    sx: {},
    iconBoxSx: {},
  },
};

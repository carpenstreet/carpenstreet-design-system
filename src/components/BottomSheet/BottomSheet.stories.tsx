import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui.tsx';
import ExampleBottomSheet from './ExampleBottomSheet';
import { Stack } from '@mui/material';
import Typography from '../Typography/Typography.tsx';
import Button from '../Button/Button.tsx';

const meta: Meta<typeof ExampleBottomSheet> = {
  title: 'Component/BottomSheet',
  component: ExampleBottomSheet,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleBottomSheet>;

export const Default: Story = {
  args: {
    height: 'full',
    showCloseIcon: true,
    renderTitle: (
      <Stack justifyContent={'start'} flexDirection={'row'}>
        <Typography variant={'typography/body/medium/bold'}>title 영역입니다.</Typography>
      </Stack>
    ),
    renderContent: (
      <Typography variant={'typography/body/medium/regular'} display={'block'}>
        content 영역입니다.
      </Typography>
    ),
    renderActions: (
      <Stack gap={'8px'}>
        <Button color={'primary'} size={'L'} variant={'contained'}>
          취소
        </Button>
        <Button color={'default'} size={'L'} variant={'outlined'}>
          확인
        </Button>
      </Stack>
    ),
    sx: {},
  },
};

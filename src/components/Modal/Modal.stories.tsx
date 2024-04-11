import { Meta, StoryObj } from '@storybook/react';
import ThemeMui from '../../shared/settings/ThemeMui.tsx';
import ExampleModal from './ExampleModal.tsx';
import { Stack } from '@mui/material';
import Typography from '../Typography/Typography.tsx';
import Button from '../Button/Button.tsx';

const meta: Meta<typeof ExampleModal> = {
  title: 'Component/Modal',
  component: ExampleModal,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ExampleModal>;

export const Default: Story = {
  args: {
    size: 'M',
    renderTitle: (
      <Stack justifyContent={'center'} flexDirection={'row'}>
        <Typography variant={'typography/title/small/bold'}>title 영역입니다.</Typography>
      </Stack>
    ),
    renderContent: (
      <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
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

export const ButtonVerticalModal: Story = {
  args: {
    size: 'M',
    renderTitle: (
      <Stack justifyContent={'center'} flexDirection={'row'}>
        <Typography variant={'typography/title/small/bold'}>title 영역입니다.</Typography>
      </Stack>
    ),
    renderContent: (
      <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
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

export const ButtonVerticalModalOnlyDescription: Story = {
  args: {
    size: 'M',
    renderTitle: null,
    renderContent: (
      <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
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

export const ButtonHorizontalModal: Story = {
  args: {
    size: 'M',
    renderTitle: (
      <Stack justifyContent={'center'} flexDirection={'row'}>
        <Typography variant={'typography/title/small/bold'}>title 영역입니다.</Typography>
      </Stack>
    ),
    renderContent: (
      <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>
    ),
    renderActions: (
      <Stack gap={'8px'} direction={'row'}>
        <Button color={'primary'} size={'L'} variant={'contained'} fullWidth>
          취소
        </Button>
        <Button color={'default'} size={'L'} variant={'outlined'} fullWidth>
          확인
        </Button>
      </Stack>
    ),
    sx: {},
  },
};

export const ButtonHorizontalModalOnlyDescription: Story = {
  args: {
    size: 'M',
    renderTitle: null,
    renderContent: (
      <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>
    ),
    renderActions: (
      <Stack gap={'8px'} direction={'row'}>
        <Button color={'primary'} size={'L'} variant={'contained'} fullWidth>
          취소
        </Button>
        <Button color={'default'} size={'L'} variant={'outlined'} fullWidth>
          확인
        </Button>
      </Stack>
    ),
    sx: {},
  },
};

export const ButtonSingleModal: Story = {
  args: {
    size: 'M',
    renderTitle: (
      <Stack justifyContent={'center'} flexDirection={'row'}>
        <Typography variant={'typography/title/small/bold'}>title 영역입니다.</Typography>
      </Stack>
    ),
    renderContent: (
      <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>
    ),
    renderActions: (
      <Button color={'primary'} size={'L'} variant={'contained'} fullWidth>
        취소
      </Button>
    ),
    sx: {},
  },
};

export const ButtonSingleModalOnlyDescription: Story = {
  args: {
    size: 'M',
    renderTitle: null,
    renderContent: (
      <Typography variant={'typography/body/medium/regular'} display={'block'} width={'100%'} textAlign={'center'}>
        content 영역입니다. <br />
        안내 문구를 작성해주세요.
      </Typography>
    ),
    renderActions: (
      <Button color={'default'} size={'L'} variant={'outlined'} fullWidth>
        확인
      </Button>
    ),
    sx: {},
  },
};

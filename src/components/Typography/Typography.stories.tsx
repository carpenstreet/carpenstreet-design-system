import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import ThemeMui from '../../shared/settings/ThemeMui';

const meta: Meta<typeof Typography> = {
  title: 'Foundation/Typography',
  component: Typography,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'typography/headline/h1/regular',
    children: '내 인생의 전환점은 타이포그래피 수업이었다.',
  },
};

export const HeadlineH1Black: Story = {
  args: {
    variant: 'typography/headline/h1/black',
    children: 'typography/headline/h1/black',
  },
};

export const HeadlineH1Bold: Story = {
  args: {
    variant: 'typography/headline/h1/bold',
    children: 'typography/headline/h1/bold',
  },
};

export const HeadlineH1Medium: Story = {
  args: {
    variant: 'typography/headline/h1/medium',
    children: 'typography/headline/h1/medium',
  },
};

export const HeadlineH1Regular: Story = {
  args: {
    variant: 'typography/headline/h1/regular',
    children: 'typography/headline/h1/regular',
  },
};
// H2
export const HeadlineH2Black: Story = {
  args: {
    variant: 'typography/headline/h2/black',
    children: 'typography/headline/h2/black',
  },
};

export const HeadlineH2Bold: Story = {
  args: {
    variant: 'typography/headline/h2/bold',
    children: 'typography/headline/h2/bold',
  },
};

export const HeadlineH2Medium: Story = {
  args: {
    variant: 'typography/headline/h2/medium',
    children: 'typography/headline/h2/medium',
  },
};

export const HeadlineH2Regular: Story = {
  args: {
    variant: 'typography/headline/h2/regular',
    children: 'typography/headline/h2/regular',
  },
};

// H3
export const HeadlineH3Black: Story = {
  args: {
    variant: 'typography/headline/h3/black',
    children: 'typography/headline/h3/black',
  },
};

export const HeadlineH3Bold: Story = {
  args: {
    variant: 'typography/headline/h3/bold',
    children: 'typography/headline/h3/bold',
  },
};

export const HeadlineH3Medium: Story = {
  args: {
    variant: 'typography/headline/h3/medium',
    children: 'typography/headline/h3/medium',
  },
};

export const HeadlineH3Regular: Story = {
  args: {
    variant: 'typography/headline/h3/regular',
    children: 'typography/headline/h3/regular',
  },
};

// H4
export const HeadlineH4Black: Story = {
  args: {
    variant: 'typography/headline/h4/black',
    children: 'typography/headline/h4/black',
  },
};

export const HeadlineH4Bold: Story = {
  args: {
    variant: 'typography/headline/h4/bold',
    children: 'typography/headline/h4/bold',
  },
};

export const HeadlineH4Medium: Story = {
  args: {
    variant: 'typography/headline/h4/medium',
    children: 'typography/headline/h4/medium',
  },
};

export const HeadlineH4Regular: Story = {
  args: {
    variant: 'typography/headline/h4/regular',
    children: 'typography/headline/h4/regular',
  },
};

// Title Large
export const TitleLargeBlack: Story = {
  args: {
    variant: 'typography/title/large/black',
    children: 'typography/title/large/black',
  },
};

export const TitleLargeBold: Story = {
  args: {
    variant: 'typography/title/large/bold',
    children: 'typography/title/large/bold',
  },
};

export const TitleLargeMedium: Story = {
  args: {
    variant: 'typography/title/large/medium',
    children: 'typography/title/large/medium',
  },
};

export const TitleLargeRegular: Story = {
  args: {
    variant: 'typography/title/large/regular',
    children: 'typography/title/large/regular',
  },
};

// Title Medium
export const TitleMediumBlack: Story = {
  args: {
    variant: 'typography/title/medium/black',
    children: 'typography/title/medium/black',
  },
};

export const TitleMediumBold: Story = {
  args: {
    variant: 'typography/title/medium/bold',
    children: 'typography/title/medium/bold',
  },
};

export const TitleMediumMedium: Story = {
  args: {
    variant: 'typography/title/medium/medium',
    children: 'typography/title/medium/medium',
  },
};

export const TitleMediumRegular: Story = {
  args: {
    variant: 'typography/title/medium/regular',
    children: 'typography/title/medium/regular',
  },
};

// Title Small
export const TitleSmallBlack: Story = {
  args: {
    variant: 'typography/title/small/black',
    children: 'typography/title/small/black',
  },
};

export const TitleSmallBold: Story = {
  args: {
    variant: 'typography/title/small/bold',
    children: 'typography/title/small/bold',
  },
};

export const TitleSmallMedium: Story = {
  args: {
    variant: 'typography/title/small/medium',
    children: 'typography/title/small/medium',
  },
};

export const TitleSmallRegular: Story = {
  args: {
    variant: 'typography/title/small/regular',
    children: 'typography/title/small/regular',
  },
};

// Body Medium
export const BodyMediumBlack: Story = {
  args: {
    variant: 'typography/body/medium/black',
    children: 'typography/body/medium/black',
  },
};

export const BodyMediumBold: Story = {
  args: {
    variant: 'typography/body/medium/bold',
    children: 'typography/body/medium/bold',
  },
};

export const BodyMediumMedium: Story = {
  args: {
    variant: 'typography/body/medium/medium',
    children: 'typography/body/medium/medium',
  },
};

export const BodyMediumRegular: Story = {
  args: {
    variant: 'typography/body/medium/regular',
    children: 'typography/body/medium/regular',
  },
};

// Body Small
export const BodySmallBlack: Story = {
  args: {
    variant: 'typography/body/small/black',
    children: 'typography/body/small/black',
  },
};

export const BodySmallBold: Story = {
  args: {
    variant: 'typography/body/small/bold',
    children: 'typography/body/small/bold',
  },
};

export const BodySmallMedium: Story = {
  args: {
    variant: 'typography/body/small/medium',
    children: 'typography/body/small/medium',
  },
};

export const BodySmallRegular: Story = {
  args: {
    variant: 'typography/body/small/regular',
    children: 'typography/body/small/regular',
  },
};

// Label Large
export const LabelLargeBlack: Story = {
  args: {
    variant: 'typography/label/large/black',
    children: 'typography/label/large/black',
  },
};

export const LabelLargeBold: Story = {
  args: {
    variant: 'typography/label/large/bold',
    children: 'typography/label/large/bold',
  },
};

export const LabelLargeMedium: Story = {
  args: {
    variant: 'typography/label/large/medium',
    children: 'typography/label/large/medium',
  },
};

export const LabelLargeRegular: Story = {
  args: {
    variant: 'typography/label/large/regular',
    children: 'typography/label/large/regular',
  },
};

// Label Medium
export const LabelMediumBlack: Story = {
  args: {
    variant: 'typography/label/medium/black',
    children: 'typography/label/medium/black',
  },
};

export const LabelMediumBold: Story = {
  args: {
    variant: 'typography/label/medium/bold',
    children: 'typography/label/medium/bold',
  },
};

export const LabelMediumMedium: Story = {
  args: {
    variant: 'typography/label/medium/medium',
    children: 'typography/label/medium/medium',
  },
};

export const LabelMediumRegular: Story = {
  args: {
    variant: 'typography/label/medium/regular',
    children: 'typography/label/medium/regular',
  },
};

// Label Small
export const LabelSmallBlack: Story = {
  args: {
    variant: 'typography/label/small/black',
    children: 'typography/label/small/black',
  },
};

export const LabelSmallBold: Story = {
  args: {
    variant: 'typography/label/small/bold',
    children: 'typography/label/small/bold',
  },
};

export const LabelSmallMedium: Story = {
  args: {
    variant: 'typography/label/small/medium',
    children: 'typography/label/small/medium',
  },
};

export const LabelSmallRegular: Story = {
  args: {
    variant: 'typography/label/small/regular',
    children: 'typography/label/small/regular',
  },
};

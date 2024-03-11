import { Meta, StoryObj } from '@storybook/react';
import Typography from './Typography';
import ThemeMui from '@shared/settings/ThemeMui';

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
    variant: 'Typography/Headline/H1/regular',
    children: '내 인생의 전환점은 타이포그래피 수업이었다.',
  },
};

export const HeadlineH1Black: Story = {
  args: {
    variant: 'Typography/Headline/H1/black',
    children: 'Typography/Headline/H1/black',
  },
};

export const HeadlineH1Bold: Story = {
  args: {
    variant: 'Typography/Headline/H1/bold',
    children: 'Typography/Headline/H1/bold',
  },
};

export const HeadlineH1Medium: Story = {
  args: {
    variant: 'Typography/Headline/H1/medium',
    children: 'Typography/Headline/H1/medium',
  },
};

export const HeadlineH1Regular: Story = {
  args: {
    variant: 'Typography/Headline/H1/regular',
    children: 'Typography/Headline/H1/regular',
  },
};
// H2
export const HeadlineH2Black: Story = {
  args: {
    variant: 'Typography/Headline/H2/black',
    children: 'Typography/Headline/H2/black',
  },
};

export const HeadlineH2Bold: Story = {
  args: {
    variant: 'Typography/Headline/H2/bold',
    children: 'Typography/Headline/H2/bold',
  },
};

export const HeadlineH2Medium: Story = {
  args: {
    variant: 'Typography/Headline/H2/medium',
    children: 'Typography/Headline/H2/medium',
  },
};

export const HeadlineH2Regular: Story = {
  args: {
    variant: 'Typography/Headline/H2/regular',
    children: 'Typography/Headline/H2/regular',
  },
};

// H3
export const HeadlineH3Black: Story = {
  args: {
    variant: 'Typography/Headline/H3/black',
    children: 'Typography/Headline/H3/black',
  },
};

export const HeadlineH3Bold: Story = {
  args: {
    variant: 'Typography/Headline/H3/bold',
    children: 'Typography/Headline/H3/bold',
  },
};

export const HeadlineH3Medium: Story = {
  args: {
    variant: 'Typography/Headline/H3/medium',
    children: 'Typography/Headline/H3/medium',
  },
};

export const HeadlineH3Regular: Story = {
  args: {
    variant: 'Typography/Headline/H3/regular',
    children: 'Typography/Headline/H3/regular',
  },
};

// H4
export const HeadlineH4Black: Story = {
  args: {
    variant: 'Typography/Headline/H4/black',
    children: 'Typography/Headline/H4/black',
  },
};

export const HeadlineH4Bold: Story = {
  args: {
    variant: 'Typography/Headline/H4/bold',
    children: 'Typography/Headline/H4/bold',
  },
};

export const HeadlineH4Medium: Story = {
  args: {
    variant: 'Typography/Headline/H4/medium',
    children: 'Typography/Headline/H4/medium',
  },
};

export const HeadlineH4Regular: Story = {
  args: {
    variant: 'Typography/Headline/H4/regular',
    children: 'Typography/Headline/H4/regular',
  },
};

// Title Large
export const TitleLargeBlack: Story = {
  args: {
    variant: 'Typography/Title/Large/black',
    children: 'Typography/Title/Large/black',
  },
};

export const TitleLargeBold: Story = {
  args: {
    variant: 'Typography/Title/Large/bold',
    children: 'Typography/Title/Large/bold',
  },
};

export const TitleLargeMedium: Story = {
  args: {
    variant: 'Typography/Title/Large/medium',
    children: 'Typography/Title/Large/medium',
  },
};

export const TitleLargeRegular: Story = {
  args: {
    variant: 'Typography/Title/Large/regular',
    children: 'Typography/Title/Large/regular',
  },
};

// Title Medium
export const TitleMediumBlack: Story = {
  args: {
    variant: 'Typography/Title/Medium/black',
    children: 'Typography/Title/Medium/black',
  },
};

export const TitleMediumBold: Story = {
  args: {
    variant: 'Typography/Title/Medium/bold',
    children: 'Typography/Title/Medium/bold',
  },
};

export const TitleMediumMedium: Story = {
  args: {
    variant: 'Typography/Title/Medium/medium',
    children: 'Typography/Title/Medium/medium',
  },
};

export const TitleMediumRegular: Story = {
  args: {
    variant: 'Typography/Title/Medium/regular',
    children: 'Typography/Title/Medium/regular',
  },
};

// Title Small
export const TitleSmallBlack: Story = {
  args: {
    variant: 'Typography/Title/Small/black',
    children: 'Typography/Title/Small/black',
  },
};

export const TitleSmallBold: Story = {
  args: {
    variant: 'Typography/Title/Small/bold',
    children: 'Typography/Title/Small/bold',
  },
};

export const TitleSmallMedium: Story = {
  args: {
    variant: 'Typography/Title/Small/medium',
    children: 'Typography/Title/Small/medium',
  },
};

export const TitleSmallRegular: Story = {
  args: {
    variant: 'Typography/Title/Small/regular',
    children: 'Typography/Title/Small/regular',
  },
};

// Body Medium
export const BodyMediumBlack: Story = {
  args: {
    variant: 'Typography/Body/Medium/black',
    children: 'Typography/Body/Medium/black',
  },
};

export const BodyMediumBold: Story = {
  args: {
    variant: 'Typography/Body/Medium/bold',
    children: 'Typography/Body/Medium/bold',
  },
};

export const BodyMediumMedium: Story = {
  args: {
    variant: 'Typography/Body/Medium/medium',
    children: 'Typography/Body/Medium/medium',
  },
};

export const BodyMediumRegular: Story = {
  args: {
    variant: 'Typography/Body/Medium/regular',
    children: 'Typography/Body/Medium/regular',
  },
};

// Body Small
export const BodySmallBlack: Story = {
  args: {
    variant: 'Typography/Body/Small/black',
    children: 'Typography/Body/Small/black',
  },
};

export const BodySmallBold: Story = {
  args: {
    variant: 'Typography/Body/Small/bold',
    children: 'Typography/Body/Small/bold',
  },
};

export const BodySmallMedium: Story = {
  args: {
    variant: 'Typography/Body/Small/medium',
    children: 'Typography/Body/Small/medium',
  },
};

export const BodySmallRegular: Story = {
  args: {
    variant: 'Typography/Body/Small/regular',
    children: 'Typography/Body/Small/regular',
  },
};

// Label Large
export const LabelLargeBlack: Story = {
  args: {
    variant: 'Typography/Label/Large/black',
    children: 'Typography/Label/Large/black',
  },
};

export const LabelLargeBold: Story = {
  args: {
    variant: 'Typography/Label/Large/bold',
    children: 'Typography/Label/Large/bold',
  },
};

export const LabelLargeMedium: Story = {
  args: {
    variant: 'Typography/Label/Large/medium',
    children: 'Typography/Label/Large/medium',
  },
};

export const LabelLargeRegular: Story = {
  args: {
    variant: 'Typography/Label/Large/regular',
    children: 'Typography/Label/Large/regular',
  },
};

// Label Medium
export const LabelMediumBlack: Story = {
  args: {
    variant: 'Typography/Label/Medium/black',
    children: 'Typography/Label/Medium/black',
  },
};

export const LabelMediumBold: Story = {
  args: {
    variant: 'Typography/Label/Medium/bold',
    children: 'Typography/Label/Medium/bold',
  },
};

export const LabelMediumMedium: Story = {
  args: {
    variant: 'Typography/Label/Medium/medium',
    children: 'Typography/Label/Medium/medium',
  },
};

export const LabelMediumRegular: Story = {
  args: {
    variant: 'Typography/Label/Medium/regular',
    children: 'Typography/Label/Medium/regular',
  },
};

// Label Small
export const LabelSmallBlack: Story = {
  args: {
    variant: 'Typography/Label/Small/black',
    children: 'Typography/Label/Small/black',
  },
};

export const LabelSmallBold: Story = {
  args: {
    variant: 'Typography/Label/Small/bold',
    children: 'Typography/Label/Small/bold',
  },
};

export const LabelSmallMedium: Story = {
  args: {
    variant: 'Typography/Label/Small/medium',
    children: 'Typography/Label/Small/medium',
  },
};

export const LabelSmallRegular: Story = {
  args: {
    variant: 'Typography/Label/Small/regular',
    children: 'Typography/Label/Small/regular',
  },
};

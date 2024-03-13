import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { GridContainer, GridItem } from './Grid';
import ThemeMui from '@shared/settings/ThemeMui';
import { Paper } from '@mui/material';

const meta: Meta<typeof GridContainer> = {
  title: 'Foundation/Grid',
  component: GridContainer,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GridContainer>;

export const GridContainerExample: Story = {
  args: {
    direction: 'row',
    sx: {},
    children: (
      <React.Fragment>
        {new Array(12).fill(null).map((_, idx) => (
          <GridItem key={idx} mobile={1} desktop={1}>
            <Paper
              elevation={0}
              sx={{
                height: '300px',
                backgroundColor: '#FFE5E5',
                padding: 0,
              }}
            />
          </GridItem>
        ))}
      </React.Fragment>
    ),
  },
};

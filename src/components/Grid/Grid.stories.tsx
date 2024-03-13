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
    children: (
      <React.Fragment>
        {new Array(12).fill(null).map((_, idx) => (
          <GridItem key={idx} mobile={1} desktop={1}>
            <Paper
              sx={{
                height: '500px',
                backgroundColor: 'tomato',
                padding: 0,
              }}
            />
          </GridItem>
        ))}
      </React.Fragment>
    ),
    sx: {},
    direction: 'row',
  },
};

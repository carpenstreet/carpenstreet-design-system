import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';
import ThemeMui from '@shared/settings/ThemeMui';
import { Paper } from '@mui/material';

const meta: Meta<typeof Grid> = {
  title: 'Foundation/Grid',
  component: Grid,
  decorators: [
    (Story) => (
      <ThemeMui>
        <Story />
      </ThemeMui>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const GridExample: Story = {
  args: {
    direction: 'row',
    container: true,
    sx: {},
    children: (
      <React.Fragment>
        {new Array(12).fill(null).map((_, idx) => (
          <Grid item key={idx} mobile={1} desktop={1}>
            <Paper
              elevation={0}
              sx={{
                height: '100px',
                backgroundColor: '#FFE5E5',
                padding: 0,
              }}
            />
          </Grid>
        ))}
      </React.Fragment>
    ),
  },
};

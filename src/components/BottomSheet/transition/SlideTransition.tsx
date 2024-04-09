import React from 'react';
import { Slide } from '@mui/material';
import { TransitionProps as MuiTransitionProps } from '@mui/material/transitions/transition';

const SlideUpTransition = React.forwardRef((props: MuiTransitionProps, ref) => {
  return <Slide direction={'up'} ref={ref} {...props} />;
});

export default SlideUpTransition;

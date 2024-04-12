import { Tab as MUITab } from '@mui/material';
import { TabProps } from './Tab.types.ts';
import Typography from '../Typography/Typography.tsx';
import React from 'react';

const Tab = React.forwardRef((props: TabProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { label, size, sx: sxOverride, ...rest } = props;

  const labelToRender = (
    <Typography variant={'typography/body/small/regular'} color={'color/gray/800'}>
      {label}
    </Typography>
  );

  const sx = {
    padding: size === 'L' ? '0 16px 0' : '0 6px 0',
    height: size === 'L' ? '64px' : '46px',
    ...sxOverride,
  };

  return <MUITab {...rest} label={labelToRender} sx={sx} ref={ref} />;
});

export default Tab;

import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { InformationProps } from './Information.types.ts';
import InformationOutlineIcon from '../Icon/InformationOutline/InformationOutlineIcon.tsx';

export default function Information(props: InformationProps) {
  const { variant, iconBoxSx: iconBoxSxOverride, sx: sxOverride, contents, icon, iconToTop } = props;

  const theme = useTheme();

  const bgColor = (() => {
    switch (variant) {
      case 'default':
        return theme.palette['color/gray/100'];
      case 'info':
        return theme.palette['color/skyblue/100'];
      case 'attention':
        return theme.palette['color/orange/100'];
    }
  })();

  const fontColor = (() => {
    switch (variant) {
      case 'default':
        return theme.palette['color/gray/800'];
      case 'info':
        return theme.palette['color/skyblue/600'];
      case 'attention':
        return theme.palette['color/orange/500'];
    }
  })();

  const iconBoxBgColor = (() => {
    switch (variant) {
      case 'default':
        return theme.palette['color/gray/600'];
      case 'info':
        return theme.palette['color/skyblue/500'];
      case 'attention':
        return theme.palette['color/orange/500'];
    }
  })();

  const iconBoxSx = {
    display: 'flex',
    width: '32px',
    height: '32px',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: '100px',
    ...(iconToTop && {
      alignSelf: 'start',
    }),
    backgroundColor: iconBoxBgColor,
    ...iconBoxSxOverride,
  };

  const sx = {
    width: '100%',
    borderRadius: '8px',
    padding: '16px 24px',
    display: 'flex',
    gap: '16px',
    backgroundColor: bgColor,
    alignItems: 'center',
    '& span': { color: fontColor },
    ...sxOverride,
  };

  return (
    <Box sx={sx}>
      <Box sx={iconBoxSx}>{icon ? icon : <InformationOutlineIcon color={'color/white'} width={24} height={24} />}</Box>
      {contents}
    </Box>
  );
}

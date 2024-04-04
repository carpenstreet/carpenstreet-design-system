import React from 'react';
import MUIMenu from '@mui/material/Menu';
import { MenuPropsType } from './Menu.types.ts';

export default function Menu({ width, fullWidth, children, anchorEl, sx, paperSx, ...rest }: MenuPropsType) {
  const menuSx = {
    '& .MuiPaper-root': {
      ...(width && { width }),
      ...(fullWidth && { width: `${anchorEl && anchorEl instanceof Element && anchorEl.clientWidth}px` }),
      ...paperSx,
    },
    ...sx,
  };

  return (
    <MUIMenu anchorEl={anchorEl} sx={menuSx} {...rest}>
      {children}
    </MUIMenu>
  );
}

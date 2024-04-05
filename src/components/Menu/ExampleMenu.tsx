import React from 'react';
import Menu from './Menu.tsx';
import MenuItem from '../MenuItem/MenuItem.tsx';
import { Box } from '@mui/material';
import Button from '../Button/Button.tsx';
import { MenuPropsType } from './Menu.types.ts';

export default function ExampleMenu({ ...rest }: MenuPropsType) {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleMenuItemClick = (index: number) => () => {
    setSelectedIndex(index);
    handleClose();
  };

  return (
    <Box sx={{ display: 'flex', gap: '10px', width: '250px', marginBottom: '100px' }}>
      <Button color={'primary'} variant={'contained'} size={'M'} sx={{ width: '100%' }} onClick={handleClick}>
        Click
      </Button>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} {...rest}>
        {new Array(10).fill(null).map((_, idx) => (
          <MenuItem key={idx} selected={selectedIndex === idx} onClick={handleMenuItemClick(idx)}>
            Menu Item Menu Item!
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

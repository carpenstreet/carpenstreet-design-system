import { BaseSelectProps as MUIBaseSelectProps, OutlinedSelectProps as MUIOutlinedSelectProps } from '@mui/material/Select/Select';

export type SelectProps<Value = unknown> = MUIBaseSelectProps<Value> & MUIOutlinedSelectProps;

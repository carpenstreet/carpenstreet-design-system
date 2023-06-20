import { CSSProperties, ReactNode } from 'react';

export type TButtonOn = 'light' | 'dark';
export type TButtonColor = 'primary' | 'default';
export type TButtonStyle = 'filled' | 'outlined' | 'default' | 'text' | 'applied';
export type TButtonSize = 'L' | 'M' | 'S';

export enum BUTTON_TYPE {
  'lightPrimaryFill',
  'lightDefaultFill',
  'lightPrimaryLine',
  'lightDefaultLine',
  'lightText',
  'lightPrimaryApplied',
  'lightFillDisabled',
  'lightLineDisabled',
  'lightTextDisabled',
  'darkPrimaryFill',
  'darkDefaultFill',
  'darkPrimaryLine',
  'darkDefaultLine',
  'darkText',
  'darkPrimaryApplied',
  'darkFillDisabled',
  'darkLineDisabled',
  'darkTextDisabled',
}

type StyleForColor<Color extends TButtonColor> = Color extends 'primary' ? 'filled' | 'outlined' : 'filled' | 'default' | 'text' | 'applied' | 'outlined';

export interface IButtonProps<Color extends TButtonColor> {
  on: TButtonOn;
  color: Color;
  style: StyleForColor<Color>;
  size: TButtonSize;
  activated?: boolean;
  startIcon?: boolean;
  endIcon?: boolean;
  isLoading?: boolean;
  width?: number | string;
  buttonStyle?: CSSProperties;
  letterStyle?: CSSProperties;
  children: ReactNode | ReactNode[];
}

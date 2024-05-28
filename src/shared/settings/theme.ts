import React from 'react';
import { colorPalette } from './color/color';
import { CustomTypographyVariantsTypes } from '../../components/Typography/Typography.types';

type ColorPaletteType = typeof colorPalette;

interface CustomShadowOptions {
  z1: string;
  z8: string;
  z12: string;
  z16: string;
  z20: string;
  z24: string;
  //
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  //
  card: string;
  dialog: string;
  dropdown: string;
}

interface CustomTypographyVariants extends Record<CustomTypographyVariantsTypes, React.CSSProperties> {}

// Button의 Color Props에 default와 gray를 추가해주려면 palette에도 해당 색상들을 추가해줘야 함
// 어쩔 수 없이 만든 interface
// 참고: https://github.com/mui/material-ui/issues/29702#issuecomment-972471545
interface ButtonColorProps {
  default: {
    main: string;
    dark: string;
    light: string;
  };
  gray: {
    main: string;
    dark: string;
    light: string;
  };
}

// -------------------------------------------------------

declare module '@mui/material' {
  interface Color {
    0: string;
    500_8: string;
    500_12: string;
    500_16: string;
    500_24: string;
    500_32: string;
    500_48: string;
    500_56: string;
    500_80: string;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadowOptions;
  }
  interface ThemeOptions {
    customShadows?: CustomShadowOptions;
  }

  interface TypographyVariants extends CustomTypographyVariants {}

  interface TypographyVariantsOptions extends Partial<CustomTypographyVariants> {}

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    smallTablet: true;
    largeTablet: true;
    desktop: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends ColorPaletteType, ButtonColorProps {}
  interface PaletteOptions extends ColorPaletteType, ButtonColorProps {}
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides extends Record<CustomTypographyVariantsTypes, true> {}
}

declare module '@mui/material/Pagination/Pagination' {
  interface PaginationPropsSizeOverrides {
    L: true;
    M: true;
  }
}

declare module '@mui/material/PaginationItem/PaginationItem' {
  interface PaginationItemPropsSizeOverrides {
    L: true;
    M: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    underlined: true;
    iconOnly: true;
  }

  interface ButtonPropsSizeOverrides {
    L: true;
    M: true;
    S: true;
  }

  interface ButtonPropsColorOverrides {
    default: true;
    gray: true;
  }
}

declare module '@mui/material/IconButton/IconButton' {
  interface IconButtonPropsSizeOverrides {
    M: true;
    S: true;
  }
}

declare module '@mui/material/Checkbox/Checkbox' {
  interface CheckboxPropsSizeOverrides {
    M: true;
    S: true;
  }
}
declare module '@mui/material/Radio/Radio' {
  interface RadioPropsSizeOverrides {
    M: true;
    S: true;
  }
}

declare module '@mui/material/FormControl/FormControl' {
  interface FormControlPropsSizeOverrides {
    M: true;
    S: true;
  }
}

declare module '@mui/material/InputBase/InputBase' {
  interface InputBasePropsSizeOverrides {
    M: true;
    S: true;
  }
}

declare module '@mui/material/InputLabel/InputLabel' {
  interface InputLabelPropsSizeOverrides {
    M: true;
    S: true;
  }
}

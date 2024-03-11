import React from 'react';
import { ThemeOptions } from '@mui/material';
import { colorPalette } from './Color.ts';
import { CustomTypographyVariantsTypes } from '@components/Typography/Typography.types.ts';

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
interface ButtonColorProps {
  default: string;
  gray: string;
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
}

declare module '@mui/material/styles/createPalette' {
  interface Palette extends ColorPaletteType, ButtonColorProps {}
  interface PaletteOptions extends ColorPaletteType, ButtonColorProps {}
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides extends Record<CustomTypographyVariantsTypes, true> {}
}

// [todo]: styled-component type을 적용하면 오류가 많이 발생하여 임시 주석처리
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeOptions {
    colors: {
      icon: string;
      activeText: string;
      text: string;
      gnbBg: string;
      gnbCount: string;
      gnbCountText: string;
      listBorder: string;
      colBg: string;
      colActiveBg: string;
      colText: string;
      colActiveText: string;
    } & ThemeOptions['colors'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    underlined: true;
  }

  interface ButtonPropsSizeOverrides {
    XL: true;
    L: true;
    M: true;
    S: true;
  }

  interface ButtonPropsColorOverrides {
    default: true;
    gray: true;
  }
}

import { ThemeOptions } from '@mui/material';
import color from './color';

type TColor = typeof color;

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

interface GradientsPaletteOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
}

interface ChartPaletteOptions {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
  donut: string[];
}

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
}

declare module '@mui/material/styles/createPalette' {
  export interface Palette extends TColor {
    _unused_: Symbol;
  }
  export interface PaletteOptions extends TColor {
    _unused_: Symbol;
  }

  interface TypeBackground {
    neutral: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
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

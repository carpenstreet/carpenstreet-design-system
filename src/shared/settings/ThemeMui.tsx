import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colorPalette } from './color/color.ts';
import { CustomTypographyVariants } from '../../components/Typography/Typography.constants.ts';
import { fontFace } from '../styles/fontFaceStyle';
import { CssBaseline } from '@mui/material';
import { shadows } from './shadows/shadows.ts';
import { overrideTypography } from './typography/typography.ts';
import { overrideButton } from './button/button.ts';
import { overrideIconButton } from './iconButton/iconButton.ts';
import { overrideCheckbox } from './checkbox/checkbox.ts';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeMui({ children }: Props) {
  const theme = createTheme({
    palette: {
      ...colorPalette,
      // Button.tsx의 color props를 위한 기본 설정
      // Button의 Color Props에 default와 gray를 추가해주려면 palette에도 해당 색상들을 추가해줘야 함
      // 어쩔 수 없이 만든 기본 색상이며, 아래 MuiButton의 styleOverrides에서 실제 color를 관리함
      default: {
        main: '#fff',
        light: '#fff',
        dark: '#fff',
      },
      gray: {
        main: '#fff',
        light: '#fff',
        dark: '#fff',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: fontFace,
      },
      MuiUseMediaQuery: {
        defaultProps: {
          noSsr: true,
        },
      },
      MuiTypography: overrideTypography,
      MuiButton: overrideButton,
      MuiIconButton: overrideIconButton,
      MuiCheckbox: overrideCheckbox,
    },
    typography: {
      ...CustomTypographyVariants,
      allVariants: {
        fontFamily: '"Pretendard Variable", Pretendard',
      },
    },
    spacing: 4,
    breakpoints: {
      values: {
        mobile: 0,
        desktop: 768,
      },
    },
    shadows,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

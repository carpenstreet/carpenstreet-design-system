import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colorPalette } from './color/color.ts';
import { CustomTypographyVariants } from '@components/Typography/Typography.constants.ts';
import { fontFace } from '@shared/styles/fontFaceStyle';
import { CssBaseline } from '@mui/material';
import { shadows } from '@shared/settings/shadows/shadows.ts';
import { overrideTypography } from '@shared/settings/typography/typography.ts';
import { overrideButton } from '@shared/settings/button/button.ts';

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
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            backgroundColor: 'transparent',

            // Size
            ...(ownerState.size === 'M' && {
              width: '36px',
              height: '36px',
              padding: '6px',
              borderRadius: '8px',
              '& > svg': {
                width: '24px',
                height: '24px',
              },
            }),
            ...(ownerState.size === 'S' && {
              width: '24px',
              height: '24px',
              padding: '4px',
              borderRadius: '4px',
              '& > svg': {
                width: '16px',
                height: '16px',
              },
            }),
            // Color
            ...(ownerState.color === 'primary' && {
              '&:hover': {
                backgroundColor: theme.palette['color/primary/dim/100'],
              },
              '& path, & circle': {
                fill: theme.palette['color/primary/600'],
              },
              '& rect': {
                stroke: theme.palette['color/primary/600'],
              },
            }),
            ...(ownerState.color === 'default' && {
              '&:hover': {
                backgroundColor: theme.palette['color/gray/100'],
              },
            }),
            // Disabled
            '&.Mui-disabled': {
              '& path, & circle': {
                fill: theme.palette['color/gray/200'],
              },
              '& rect': {
                stroke: theme.palette['color/gray/200'],
              },
            },
          }),
        },
      },
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

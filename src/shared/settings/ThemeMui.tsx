import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colorPalette } from './Color.ts';
import { CustomTypographyVariants } from '@components/Typography/Typography.constants.ts';
import { fontFace } from '@shared/styles/fontFaceStyle';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeMui({ children }: Props) {
  const theme = createTheme({
    palette: {
      ...colorPalette,
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
      MuiRadio: {
        styleOverrides: {
          root: {
            padding: 0,
            marginRight: '10px',
            '& .MuiSvgIcon-root': {
              height: 1,
              width: 1,
            },
          },
        },
      },
    },
    typography: CustomTypographyVariants,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1296,
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

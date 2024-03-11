import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colorPalette } from './Color.ts';
import { CustomTypographyVariants } from '@components/Typography/Typography.constants.ts';
import { fontFace } from '@shared/styles/fontFaceStyle';
import { CssBaseline } from '@mui/material';

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
    },
    typography: {
      ...CustomTypographyVariants,
      allVariants: {
        fontFamily: '"Pretendard Variable", Pretendard',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

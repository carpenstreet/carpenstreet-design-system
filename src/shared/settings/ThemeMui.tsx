import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import color from './Color.ts';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeMui({ children }: Props) {
  const theme = createTheme({
    palette: {
      // [todo]: primary, secondary는 사용하지 않음. 사용하는 부분 모두 변경 후 삭제해야 함.
      // @ts-ignore
      primary: {
        main: '#f300ba',
      },
      // @ts-ignore
      secondary: {
        main: color.violet['600'],
      },

      // 아래부터 Design System Color
      // [todo]: color.json의 경우 플린님이 만둘어두신 components/ads 디렉토리로 이동해야 함.
      ...color,
    },
    components: {
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

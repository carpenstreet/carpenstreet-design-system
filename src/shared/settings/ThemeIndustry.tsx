import React, { ReactNode } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

// [todo]: ThemeMui로 변경할 예정, 변경 완료 후 삭제해야 함.
const defaultTheme: DefaultTheme = {
  colors: {
    icon: '#222222',
    activeText: '#222222',
    text: '#7c7c7c',
    gnbBg: '#ffffff',
    gnbCount: '#4E4EFF',
    gnbCountText: '#ffffff',
    listBorder: '#efefef',
    colBg: '#ffffff',
    colActiveBg: '#f8f8f8',
    colText: '#999999',
    colActiveText: '#222222',
  },
};

export default function ThemeIndustry({ children }: Props) {
  const themeMui = useTheme();

  // [todo]: 최종적으로 themeMui만 사용하도록 변경해야 함.
  return <ThemeProvider theme={{ ...themeMui, ...defaultTheme }}>{children}</ThemeProvider>;
}

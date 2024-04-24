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
import { overrideTooltip } from './tooltip/tooltip.ts';
import { overrideAvatar } from './avatar/avatar.ts';
import { overrideTab } from './tab/tab.ts';
import { overrideMenuItem } from './menuItem/menuItem.ts';
import { overrideMenu } from './menu/menu.ts';
import { overridePagination } from './pagination/pagination.ts';
import { overrideDialog } from './dialog/dialog.ts';
import { overrideDivider } from './divider/divider.ts';
import { overrideSnackbar } from './snackbar/snackbar.ts';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isBetween from 'dayjs/plugin/isBetween';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function ThemeMui({ children }: Props) {
  dayjs.extend(isSameOrAfter);
  dayjs.extend(isBetween);

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
      MuiTooltip: overrideTooltip,
      MuiAvatar: overrideAvatar,
      MuiTab: overrideTab,
      MuiMenuItem: overrideMenuItem,
      MuiMenu: overrideMenu,
      MuiPagination: overridePagination,
      MuiDialog: overrideDialog,
      MuiDivider: overrideDivider,
      MuiSnackbar: overrideSnackbar,
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
        smallTablet: 600,
        largeTablet: 1024,
        desktop: 1440,
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

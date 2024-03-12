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
      MuiTypography: {
        styleOverrides: {
          root: {
            letterSpacing: '0',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: 'auto',
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
          contained: ({ ownerState, theme }) => ({
            // Common
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '4px',
            alignSelf: 'stretch',

            // Size
            ...(ownerState.size === 'L' && {
              borderRadius: '8px',
              padding: '12px 22px',
            }),
            ...(ownerState.size === 'M' && {
              borderRadius: '8px',
              padding: '10px 22px',
            }),
            ...(ownerState.size === 'S' && {
              borderRadius: '4px',
              padding: '4px 8px',
            }),

            // Color
            // font color는 Button.tsx에서 관리
            ...(ownerState.color === 'primary' && {
              backgroundColor: theme.palette['color/primary/600'],
              '&:hover': {
                backgroundColor: theme.palette['color/primary/700'],
              },
            }),
            ...(ownerState.color === 'default' && {
              backgroundColor: theme.palette['color/gray/800'],
              '&:hover': {
                backgroundColor: theme.palette['color/gray/600'],
              },
            }),

            // Disabled
            // .Mui-disabled 클래스에 대한 css를 바꿔주어야 함
            // ownerState.disabled && {} 로 override 하기 어려움
            '&.Mui-disabled': {
              backgroundColor: theme.palette['color/gray/200'],
            },
          }),
          outlined: ({ ownerState, theme }) => ({
            // Common
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '4px',
            alignSelf: 'stretch',

            // Size
            ...(ownerState.size === 'L' && {
              borderRadius: '8px',
              padding: '12px 22px',
            }),
            ...(ownerState.size === 'M' && {
              borderRadius: '8px',
              padding: '10px 22px',
            }),
            ...(ownerState.size === 'S' && {
              borderRadius: '4px',
              padding: '4px 8px',
            }),

            // Color
            // font color는 Button.tsx에서 관리
            ...(ownerState.color === 'primary' && {
              border: `1px solid ${theme.palette['color/primary/600']}`,
              '&:hover': {
                border: `1px solid ${theme.palette['color/primary/600']}`,
                backgroundColor: theme.palette['color/primary/dim/100'],
              },
            }),
            ...(ownerState.color === 'default' && {
              border: `1px solid ${theme.palette['color/gray/dim/400']}`,
              '&:hover': {
                border: `1px solid ${theme.palette['color/gray/dim/400']}`,
                backgroundColor: theme.palette['color/gray/dim/100'],
              },
            }),

            // Disabled
            // .Mui-disabled 클래스에 대한 css를 바꿔주어야 함
            // ownerState.disabled && {} 로 override 하기 어려움
            '&.Mui-disabled': {
              border: `1px solid ${theme.palette['color/gray/200']}`,
              backgroundColor: theme.palette['color/white'],
            },
          }),
          text: ({ ownerState, theme }) => ({
            // Common
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '4px',
            alignSelf: 'stretch',
            borderRadius: 'unset',
            padding: 'unset',

            // Color
            // font color는 Button.tsx에서 관리
            ...(ownerState.color === 'primary' && {
              '&:hover': {
                borderBottom: `1px solid ${theme.palette['color/primary/600']}`,
                backgroundColor: theme.palette['color/white'],
              },
            }),
            ...(ownerState.color === 'default' && {
              '&:hover': {
                border: `1px solid ${theme.palette['color/gray/800']}`,
                backgroundColor: theme.palette['color/white'],
              },
            }),
            ...(ownerState.color === 'gray' && {
              '&:hover': {
                border: `1px solid ${theme.palette['color/gray/400']}`,
                backgroundColor: theme.palette['color/white'],
              },
            }),
          }),
        },
        // Custom Variant의 경우, styleOverrides와는 달리 아래처럼 각 조건마다 style을 적용해주어야 함
        // 아래 object의 순서는 중요함
        // 예를 들자면, disabled에 관한 style을 정의하는 object가 가장 나중에 위치해 있어야 나머지 object를 override하면서 정상적으로 작동함
        variants: [
          // underlined
          {
            props: { variant: 'underlined' },
            style: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: '4px',
              margin: '4px',
              padding: ' 0 0 2px 0',
              borderRadius: 'unset',
            },
          },
          {
            props: (props) => props.variant === 'underlined' && props.color === 'primary',
            style: ({ theme }) => ({
              borderBottom: `1px solid ${theme.palette['color/primary/600']}`,
              '& > .MuiTypography-root': {
                color: theme.palette['color/primary/600'],
              },
              '&:hover': {
                borderBottom: `1px solid ${theme.palette['color/primary/700']}`,
                backgroundColor: theme.palette['color/white'],
                '& > .MuiTypography-root': {
                  color: theme.palette['color/primary/700'],
                },
              },
            }),
          },
          {
            props: (props) => props.variant === 'underlined' && props.color === 'default',
            style: ({ theme }) => ({
              borderBottom: `1px solid ${theme.palette['color/gray/800']}`,
              '& > .MuiTypography-root': {
                color: theme.palette['color/gray/800'],
              },
              '&:hover': {
                borderBottom: `1px solid ${theme.palette['color/gray/600']}`,
                backgroundColor: theme.palette['color/white'],
                '& > .MuiTypography-root': {
                  color: theme.palette['color/gray/600'],
                },
              },
            }),
          },
          {
            props: (props) => props.variant === 'underlined' && props.color === 'gray',
            style: ({ theme }) => ({
              borderBottom: `1px solid ${theme.palette['color/gray/400']}`,
              '& > .MuiTypography-root': {
                color: theme.palette['color/gray/400'],
              },
              '&:hover': {
                borderBottom: `1px solid ${theme.palette['color/gray/600']}`,
                backgroundColor: theme.palette['color/white'],
                '& > .MuiTypography-root': {
                  color: theme.palette['color/gray/600'],
                },
              },
            }),
          },
          {
            props: (props) => props.variant === 'underlined' && props.disabled,
            style: ({ theme }) => ({
              borderBottom: `1px solid ${theme.palette['color/gray/200']}`,
              '& > .MuiTypography-root': {
                color: theme.palette['color/gray/200'],
              },
            }),
          },
          // iconOnly
          {
            props: {
              variant: 'iconOnly',
            },
            style: {
              display: 'flex',
              padding: '6px',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '8px',
            },
          },
          {
            props: (props) => props.variant === 'iconOnly' && props.size === 'M',
            style: {
              padding: '6px',
            },
          },
          {
            props: (props) => props.variant === 'iconOnly' && props.size === 'S',
            style: {
              padding: '4px',
            },
          },
          {
            props: (props) => props.variant === 'iconOnly' && props.color === 'primary',
            style: ({ theme }) => ({
              '&:hover': {
                backgroundColor: theme.palette['color/primary/dim/100'],
              },
            }),
          },
          {
            props: (props) => props.variant === 'iconOnly' && props.color === 'default',
            style: ({ theme }) => ({
              '&:hover': {
                backgroundColor: theme.palette['color/gray/100'],
              },
            }),
          },
        ],
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

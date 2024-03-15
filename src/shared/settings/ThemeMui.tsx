import React, { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colorPalette } from './Color.ts';
import { CustomTypographyVariants } from '@components/Typography/Typography.constants.ts';
import { fontFace } from '@shared/styles/fontFaceStyle';
import { CssBaseline } from '@mui/material';
import { shadows } from '@shared/settings/Shadows.ts';

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
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: ({ ownerState }) => ({
            // 기본적으로 설정되어 있던 css 해제
            minWidth: 'auto',
            textTransform: 'none',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
            // icon
            '& > .MuiButton-startIcon': {
              marginRight: '4px',
            },
            '& > .MuiButton-endIcon': {
              marginLeft: '4px',
            },
            ...((ownerState.size === 'XL' || ownerState.size === 'L') && {
              '& > .MuiButton-icon': {
                '& > svg': {
                  width: '24px',
                  height: '24px',
                },
              },
            }),
            ...(ownerState.size === 'M' && {
              '& > .MuiButton-icon': {
                '& > svg': {
                  width: '20px',
                  height: '20px',
                },
              },
            }),
            ...(ownerState.size === 'S' && {
              '& > .MuiButton-icon': {
                '& > svg': {
                  width: '16px',
                  height: '16px',
                },
              },
            }),
            // Common
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }),
          contained: ({ ownerState, theme }) => ({
            '& > .MuiTypography-root': {
              color: theme.palette['color/white'],
            },

            // Size
            // contained의 경우 XL 사이즈를 지원하지 않으므로 XL 입력받을 경우 fallback으로 L 사이즈 적용함
            ...((ownerState.size === 'L' || ownerState.size === 'XL') && {
              borderRadius: '8px',
              paddingLeft: '22px',
              paddingRight: '22px',
              height: '48px',
            }),
            ...(ownerState.size === 'M' && {
              borderRadius: '8px',
              paddingLeft: '22px',
              paddingRight: '22px',
              height: '40px',
            }),
            ...(ownerState.size === 'S' && {
              borderRadius: '4px',
              paddingLeft: '8px',
              paddingRight: '8px',
              height: '24px',
            }),

            // Color
            '& > .MuiButton-icon': {
              '& path, & circle': {
                fill: theme.palette['color/white'],
              },
              '& rect': {
                stroke: theme.palette['color/white'],
              },
            },
            ...(ownerState.color === 'primary' && {
              backgroundColor: theme.palette['color/primary/600'],
              '&:hover': {
                backgroundColor: theme.palette['color/primary/700'],
              },
            }),
            // contained의 경우 gray 색상을 지원하지 않으므로 gray 입력받을 경우 fallback으로 default 색상 적용
            ...((ownerState.color === 'default' || ownerState.color === 'gray') && {
              backgroundColor: theme.palette['color/gray/800'],
              '&:hover': {
                backgroundColor: theme.palette['color/gray/600'],
              },
            }),

            // Disabled
            // .Mui-disabled 클래스에 대한 css를 바꿔주어야 함
            // ownerState.disabled && {} 로 override 하기 어려움
            '&.Mui-disabled': {
              '& > .MuiTypography-root': {
                color: theme.palette['color/gray/400'],
              },
              backgroundColor: theme.palette['color/gray/200'],
              '& > .MuiButton-icon': {
                '& path, & circle': {
                  fill: theme.palette['color/gray/400'],
                },
                '& rect': {
                  stroke: theme.palette['color/gray/400'],
                },
              },
            },
          }),
          outlined: ({ ownerState, theme }) => ({
            // Size
            // contained의 경우 XL 사이즈를 지원하지 않으므로 XL 입력받을 경우 fallback으로 L 사이즈 적용함
            ...((ownerState.size === 'L' || ownerState.size === 'XL') && {
              borderRadius: '8px',
              paddingLeft: '21px', // border 값만큼 빼줌 (22 - 1) box-shadow css 로도 설정할 수 있지만, hover 시에 스타일이 깨지는 문제가 있어서 보류
              paddingRight: '21px', // border 값만큼 빼줌 (22 - 1)
              height: '48px',
            }),
            ...(ownerState.size === 'M' && {
              borderRadius: '8px',
              paddingLeft: '21px', // border 값만큼 빼줌 (22 - 1)
              paddingRight: '21px', // border 값만큼 빼줌 (22 - 1)
              height: '40px',
            }),
            ...(ownerState.size === 'S' && {
              borderRadius: '4px',
              paddingLeft: '7px', // border 값만큼 빼줌 (8 - 1)
              paddingRight: '7px', // border 값만큼 빼줌 (8 - 1)
              height: '24px',
            }),

            // Color
            ...(ownerState.color === 'primary' && {
              border: `1px solid ${theme.palette['color/primary/600']}`,
              '& > .MuiTypography-root': {
                color: theme.palette['color/primary/600'],
              },
              '&:hover': {
                border: `1px solid ${theme.palette['color/primary/600']}`,
                backgroundColor: theme.palette['color/primary/dim/100'],
              },
              '& > .MuiButton-icon': {
                '& path, & circle': {
                  fill: theme.palette['color/primary/600'],
                },
                '& rect': {
                  stroke: theme.palette['color/primary/600'],
                },
              },
            }),
            // contained의 경우 gray 색상을 지원하지 않으므로 gray 입력받을 경우 fallback으로 default 색상 적용
            ...((ownerState.color === 'default' || ownerState.color === 'gray') && {
              border: `1px solid ${theme.palette['color/gray/dim/400']}`,
              '& > .MuiTypography-root': {
                color: theme.palette['color/gray/800'],
              },
              '&:hover': {
                border: `1px solid ${theme.palette['color/gray/dim/400']}`,
                backgroundColor: theme.palette['color/gray/dim/100'],
              },
            }),

            // Disabled
            // .Mui-disabled 클래스에 대한 css를 바꿔주어야 함
            // ownerState.disabled && {} 로 override 하기 어려움
            '&.Mui-disabled': {
              '& > .MuiTypography-root': {
                color: theme.palette['color/gray/200'],
              },
              border: `1px solid ${theme.palette['color/gray/200']}`,
              backgroundColor: theme.palette['color/white'],
              '& > .MuiButton-icon': {
                '& path, & circle': {
                  fill: theme.palette['color/gray/200'],
                },
                '& rect': {
                  stroke: theme.palette['color/gray/200'],
                },
              },
            },
          }),
          text: ({ ownerState, theme }) => ({
            borderRadius: 'unset',
            padding: 'unset',
            backgroundColor: 'transparent',
            borderBottom: '1px solid transparent',

            // Size
            ...(ownerState.size === 'XL' && {
              height: '33px',
            }),
            ...(ownerState.size === 'L' && {
              height: '25px',
            }),
            ...(ownerState.size === 'M' && {
              height: '21px',
            }),
            ...(ownerState.size === 'S' && {
              height: '17px',
            }),

            // Color
            ...(ownerState.color === 'primary' && {
              '& > .MuiTypography-root': {
                color: theme.palette['color/primary/600'],
              },
              '&:hover': {
                borderBottom: `1px solid ${theme.palette['color/primary/600']}`,
                backgroundColor: 'transparent',
              },
              '& > .MuiButton-icon': {
                '& path, & circle': {
                  fill: theme.palette['color/primary/600'],
                },
                '& rect': {
                  stroke: theme.palette['color/primary/600'],
                },
              },
            }),
            ...(ownerState.color === 'default' && {
              '& > .MuiTypography-root': {
                color: theme.palette['color/gray/800'],
              },
              '&:hover': {
                borderBottom: `1px solid ${theme.palette['color/gray/800']}`,
                backgroundColor: 'transparent',
              },
            }),
            ...(ownerState.color === 'gray' && {
              '& > .MuiTypography-root': {
                color: theme.palette['color/gray/400'],
              },
              '&:hover': {
                borderBottom: `1px solid ${theme.palette['color/gray/400']}`,
                backgroundColor: 'transparent',
              },
              '& > .MuiButton-icon': {
                '& path, & circle': {
                  fill: theme.palette['color/gray/400'],
                },
                '& rect': {
                  stroke: theme.palette['color/gray/400'],
                },
              },
            }),

            // Disabled
            // .Mui-disabled 클래스에 대한 css를 바꿔주어야 함
            // ownerState.disabled && {} 로 override 하기 어려움
            '&.Mui-disabled': {
              '& > .MuiTypography-root': {
                color: theme.palette['color/gray/200'],
              },
              '& > .MuiButton-icon': {
                '& path, & circle': {
                  fill: theme.palette['color/gray/200'],
                },
                '& rect': {
                  stroke: theme.palette['color/gray/200'],
                },
              },
            },
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
              margin: '4px',
              padding: ' 0 0 2px 0',
              borderRadius: 'unset',
              backgroundColor: 'transparent',
            },
          },
          {
            props: (props) => props.variant === 'underlined' && props.color === 'primary',
            style: ({ theme }) => ({
              borderBottom: `1px solid ${theme.palette['color/primary/600']}`,
              '& > .MuiTypography-root': {
                color: theme.palette['color/primary/600'],
              },
              '& > .MuiButton-icon': {
                '& path, & circle': {
                  fill: theme.palette['color/primary/600'],
                },
                '& rect': {
                  stroke: theme.palette['color/primary/600'],
                },
              },
              '&:hover': {
                borderBottom: `1px solid ${theme.palette['color/primary/700']}`,
                backgroundColor: 'transparent',
                '& > .MuiTypography-root': {
                  color: theme.palette['color/primary/700'],
                },
                '& > .MuiButton-icon': {
                  '& path, & circle': {
                    fill: theme.palette['color/primary/700'],
                  },
                  '& rect': {
                    stroke: theme.palette['color/primary/700'],
                  },
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
                backgroundColor: 'transparent',
                '& > .MuiTypography-root': {
                  color: theme.palette['color/gray/600'],
                },
                '& > .MuiButton-icon': {
                  '& path, & circle': {
                    fill: theme.palette['color/gray/600'],
                  },
                  '& rect': {
                    stroke: theme.palette['color/gray/600'],
                  },
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
              '& > .MuiButton-icon': {
                '& path, & circle': {
                  fill: theme.palette['color/gray/400'],
                },
                '& rect': {
                  stroke: theme.palette['color/gray/400'],
                },
              },
              '&:hover': {
                borderBottom: `1px solid ${theme.palette['color/gray/600']}`,
                backgroundColor: 'transparent',
                '& > .MuiTypography-root': {
                  color: theme.palette['color/gray/600'],
                },
                '& > .MuiButton-icon': {
                  '& path, & circle': {
                    fill: theme.palette['color/gray/600'],
                  },
                  '& rect': {
                    stroke: theme.palette['color/gray/600'],
                  },
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
              '& > .MuiButton-icon': {
                '& path, & circle': {
                  fill: theme.palette['color/gray/200'],
                },
                '& rect': {
                  stroke: theme.palette['color/gray/200'],
                },
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
    shadows,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

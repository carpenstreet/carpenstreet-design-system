/**
 * color palette 객체입니다
 */
export const color = {
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    50: '#fafafa',
    100: '#E7E7E8',
    200: '#D2D2D3',
    300: '#BCBCBE',
    400: '#8e8e8e',
    500: '#88888A',
    600: '#6D6D70',
    700: '#4C4C50',
    800: '#313135',
    900: '#18181B',
    dim: {
      100: 'rgba(0, 0, 0, 0.04)',
      200: 'rgba(0, 0, 0, 0.12)',
      300: 'rgba(0, 0, 0, 0.24)',
      400: 'rgba(0, 0, 0, 0.32)',
      500: 'rgba(0, 0, 0, 0.4)',
      600: 'rgba(0, 0, 0, 0.56)',
      700: 'rgba(0, 0, 0, 0.72)',
      800: 'rgba(0, 0, 0, 0.8)',
    },
  },
  primary: {
    100: '#e6e6ff',
    200: '#ceceff',
    300: '#aeaeff',
    400: '#8e8eff',
    500: '#6a6aff',
    600: '#4e4eff',
    700: '#3e3ecd',
    800: '#2f2f9b',
    900: '#212170',
    dim: {
      100: 'rgba(78, 78, 255, 0.04)',
      200: 'rgba(78, 78, 255, 0.08)',
      300: 'rgba(78, 78, 255, 0.12)',
      400: 'rgba(78, 78, 255, 0.16)',
      500: 'rgba(78, 78, 255, 0.3)',
      600: 'rgba(78, 78, 255, 0.5)',
    },
  },
  grayishViolet: {
    100: '#f6f6fe',
    200: '#d9d9e4',
    300: '#bdbdca',
    400: '#a1a1b1',
    500: '#878797',
    600: '#6e6e7e',
    700: '#565665',
    800: '#3e3e4b',
  },
  orange: {
    100: '#fff5f0',
    200: '#ffe8db',
    300: '#FFC8A8',
    400: '#FFA775',
    500: '#FF660F',
    600: '#DB4F00',
    700: '#A83D00',
    800: '#7A2C00',
    900: '#521D00',
  },
  green: {
    100: '#E2FDF1',
    200: '#BEFADF',
    300: '#7DF4BE',
    400: '#33EE99',
    500: '#30E090',
    600: '#2CCD84',
    700: '#25AB6F',
    800: '#1A7950',
    900: '#0F4730',
  },
  skyBlue: {
    100: '#EBFAFE',
    200: '#C9F0FD',
    300: '#98E3FA',
    400: '#59D2F8',
    500: '#0AB8EF',
    600: '#099AC8',
    700: '#066D8E',
    800: '#00566B',
    900: '#003D4D',
  },
  state: {
    info: '#00b8d9',
    success: '#36b37e',
    warning: '#ffab00',
    error: '#df0e01',
    sale: '#ff5c00',
    infoDim: {
      100: 'rgba(0, 184, 217, 0.04)',
      200: 'rgba(0, 184, 217, 0.08)',
      300: 'rgba(0, 184, 217, 0.12)',
      400: 'rgba(0, 184, 217, 0.16)',
      500: 'rgba(0, 184, 217, 0.3)',
    },
    successDim: {
      100: 'rgba(54, 179, 126, 0.04)',
      200: 'rgba(54, 179, 126, 0.08)',
      300: 'rgba(54, 179, 126, 0.12)',
      400: 'rgba(54, 179, 126, 0.16)',
      500: 'rgba(54, 179, 126, 0.3)',
    },
    warningDim: {
      100: 'rgba(255, 171, 0, 0.04)',
      200: 'rgba(255, 171, 0, 0.08)',
      300: 'rgba(255, 171, 0, 0.12)',
      400: 'rgba(255, 171, 0, 0.16)',
      500: 'rgba(255, 171, 0, 0.3)',
    },
    errorDim: {
      100: 'rgba(223, 14, 1, 0.04)',
      200: 'rgba(223, 14, 1, 0.08)',
      300: 'rgba(223, 14, 1, 0.12)',
      400: 'rgba(223, 14, 1, 0.16)',
      500: 'rgba(223, 14, 1, 0.3)',
    },
    saleDim: {
      100: 'rgba(255, 92, 0, 0.04)',
      200: 'rgba(255, 92, 0, 0.08)',
      300: 'rgba(255, 92, 0, 0.12)',
      400: 'rgba(255, 92, 0, 0.16)',
      500: 'rgba(255, 92, 0, 0.3)',
    },
  },
  partnership: {
    vvip: 'linear-gradient(95deg, #FFE584 -5.38%, #F6AE34 36.14%, #F1CF4D 72.71%, #F08700 103.7%)',
    vip: 'linear-gradient(95deg, #8AAAEE -5.38%, #5F85D7 36.14%, #84A6F2 72.71%, #345DB2 103.7%)',
    partner: 'linear-gradient(95deg, #A6A6FC -5.38%, #77F 36.14%, #A3A3FF 72.71%, #4E4EFF 103.7%)',
  },
  gradient: {
    primary1: 'linear-gradient(180deg, rgba(78, 78, 255, 0.20) 0%, rgba(78, 78, 255, 0.00) 89.05%)',
  },
  background: {
    1: '#FAFAFC',
    2: '#F8F8FB',
    3: '#F7F7FC',
    4: '#F5F5FA',
    5: '#F4F4F9',
    6: '#ECECF3',
    7: '#F6F6FF',
    8: 'rgba(0, 0, 0, 0.5)',
    9: '#55558D',
  },
} as const;

/**
 * Color.mdx 에서 사용하는 함수입니다
 * ColorItem의 colors props로 넘겨줄 색상 obj를 반환합니다
 */
export function getColors(...colorKeys: string[]) {
  const foundColor = findColor(color, colorKeys);

  const res = {};
  for (const [key, value] of Object.entries(foundColor)) {
    if (typeof value !== 'string') continue;
    res[`color/${colorKeys.join('/')}/${key}`] = value;
  }
  return res;
}

function findColor(palette: Partial<typeof color>, colorKeys: string[]) {
  return colorKeys.length === 0 ? palette : findColor(palette[colorKeys[0]], colorKeys.slice(1));
}

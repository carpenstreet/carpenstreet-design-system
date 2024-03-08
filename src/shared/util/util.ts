import { TColor } from '@shared/settings/color.type';
import { colorPaletteSource as colorObj } from '@shared/settings/Color.ts';
import { TOpactiy } from './util.type';

export const getColor = (color: TColor): string => {
  const properties = color.replace('color/', '').split('/');
  let value = colorObj;
  for (const property of properties) value = value[property];
  return value.toString();
};

export const getHexOpacity = (hex: string, opacity: TOpactiy) => {
  const hexOpactiyObj = {
    [100]: 'FF',
    [95]: 'F2',
    [90]: 'E6',
    [85]: 'D9',
    [80]: 'CC',
    [75]: 'BF',
    [70]: 'B3',
    [65]: 'A6',
    [60]: '99',
    [55]: '8C',
    [50]: '80',
    [45]: '73',
    [40]: '66',
  };

  return `${hex}${hexOpactiyObj[opacity]}`;
};

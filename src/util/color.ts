import Color from '../shared/settings/Color';

export const getColor = (color: string) => {
  const splitColorString = color.split('.');
  let result = Color;

  splitColorString.forEach((item) => {
    result = result[item];
  });

  console.log('result', result, splitColorString);
  return result;
};

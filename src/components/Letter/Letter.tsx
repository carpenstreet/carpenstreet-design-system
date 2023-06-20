import React from 'react';
import { ILetterProps } from './Letter.types';
import { getColor } from '@shared/util/util';

const sizeObj = {
  ['maximum']: {
    fontSize: '40px',
    lineHeight: '56px',
  },
  ['giant']: {
    fontSize: '32px',
    lineHeight: '48px',
  },
  ['large']: {
    fontSize: '24px',
    lineHeight: '36px',
  },
  ['medium']: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  ['small']: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  ['tiny']: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  ['minimal']: {
    fontSize: '10px',
    lineHeight: '14px',
  },
};

const weightObj = {
  ['black']: {
    fontWeight: 800,
  },
  ['bold']: {
    fontWeight: 600,
  },
  ['regular']: {
    fontWeight: 400,
  },
};

/**
 * variant를 설정하지 않을 경우 기본적으로 Letter/en, ko/medium(medium/regular)이 적용됩니다.
 * @param variant 피그마에 있는 Ag 속성을 그대로 사용합니다.
 * @constructor
 */
const Letter = ({ variant = 'letter/en, ko/medium', color = 'color/text/primary', className, style, children, ...rest }: ILetterProps) => {
  const replaceString = variant.replace('Letter/en, ko/', '').replace('Letter/ja/', '');
  const variants = replaceString.split('/');
  const size = variants[0];
  const weight = variants[1] || 'regular';

  const styleObj = {
    ...sizeObj[size],
    ...weightObj[weight],
    color: getColor(color),
    ...style,
  };

  return (
    <div className={className} style={styleObj} {...rest}>
      {children}
    </div>
  );
};

export default Letter;

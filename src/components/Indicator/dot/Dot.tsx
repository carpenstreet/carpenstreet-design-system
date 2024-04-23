import React from 'react';
import { DotContainer } from './Dot.styles.ts';
import { DotPropsType } from './Dot.types.ts';

export default function Dot({ isFocus = false, ...props }: DotPropsType) {
  const classNameProp = props?.className ? props.className : '';
  return <DotContainer {...props} className={`${classNameProp} ${isFocus ? 'dot-focus' : ''}`} />;
}

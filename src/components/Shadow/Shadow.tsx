import React from 'react';
import { IShadowProps } from './Shadow.types';
import { Shadows } from './Shadow.styles';

/**
 * children의 컴포넌트 및 React Dom Element를 복사 후 boxShadow 스타일을 입혀서 재정의하였습니다. <br/>
 * children에 컴포넌트를 넣을 경우 아래 코드처럼 props에 style을 추가하고 최상위 요소에 style 프로퍼티 적용 부탁드립니다. <br />
 * ```
 * const Shadow = ({ style }) => {
 *  return (
 *    <ShadowWrapper style={style} />
 *  )
 * }
 * ```
 * @returns
 */
const Shadow = ({ variant = 24, children }: IShadowProps) => {
  const shadowStyle = { boxShadow: Shadows[variant - 1] };
  const childrenDisplayName = (children as JSX.Element)?.type?.displayName;

  return React.cloneElement(children, {
    ...(() => {
      // Button의 경우 props에 style이 존재하므로 buttonStyle로 넘기도록 해야 함.
      if (childrenDisplayName === 'Button') {
        return { buttonStyle: { ...(children?.props?.buttonStyle || {}), ...shadowStyle } };
      }

      return { style: { ...(children?.props?.style || {}), ...shadowStyle } };
    })(),
  });
};

export default Shadow;

import { MouseEvent } from 'react';
import { IndicatorContainer } from './Indicator.styles.ts';
import { IndicatorPropsType } from './Indicator.types.ts';
import Dot from './dot/Dot.tsx';

export default function Indicator({ currentIndex = null, count, onSelected, dotProps, renderDot, ...props }: IndicatorPropsType) {
  const handleDotSelected = (index: number) => (e: MouseEvent<HTMLDivElement>) => {
    if (onSelected) onSelected(index);
    if (dotProps?.onClick) dotProps.onClick(e);
  };

  return (
    <IndicatorContainer {...props}>
      {new Array(count).fill(null).map((_, index) => {
        const isFocus = currentIndex !== null && index === currentIndex;
        return renderDot ? renderDot({ isFocus, index }) : <Dot key={index} onClick={handleDotSelected(index)} isFocus={isFocus} {...dotProps} />;
      })}
    </IndicatorContainer>
  );
}

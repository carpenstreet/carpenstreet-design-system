import React from 'react';
import { IndicatorPropsType } from './Indicator.types.ts';
import Indicator from './Indicator';

export default function ExampleIndicator(props: IndicatorPropsType) {
  const [indicatorIndex, setIndicatorIndex] = React.useState(0);

  const handleIndicatorChange = (index: number) => {
    setIndicatorIndex(index);
  };

  return <Indicator {...props} currentIndex={indicatorIndex} onSelected={handleIndicatorChange} />;
}

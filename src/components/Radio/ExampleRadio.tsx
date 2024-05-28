import { RadioProps } from './Radio.types';
import Radio from './Radio';
import React from 'react';

export default function ExampleRadio(props: RadioProps) {
  const { size, ...rest } = props;
  const [selectedValue, setSelectedValue] = React.useState('Female');
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => setSelectedValue(event.target.value);

  return (
    <>
      <Radio {...rest} checked={selectedValue === 'Female'} onChange={handleOnChange} value="Female" size={size} />
      <Radio {...rest} checked={selectedValue === 'Male'} onChange={handleOnChange} value="Male" size={size} />
      <Radio {...rest} checked={selectedValue === 'Other'} onChange={handleOnChange} value="Other" size={size} />
    </>
  );
}

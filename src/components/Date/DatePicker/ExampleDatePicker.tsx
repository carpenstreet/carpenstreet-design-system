import React from 'react';
import { DatePickerProps } from './DatePicker.types.ts';
import DatePicker from './DatePicker.tsx';
import { Dayjs } from 'dayjs';

export default function ExampleDatePicker(props: DatePickerProps) {
  const [value, setValue] = React.useState<Dayjs | null>(null);

  function handleSelectValue(value: Dayjs) {
    setValue(value);
  }

  return <DatePicker {...props} value={value} onSelectValue={handleSelectValue} />;
}

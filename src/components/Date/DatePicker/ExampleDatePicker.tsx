import React from 'react';
import { DatePickerProps } from './DatePicker.types.ts';
import DatePicker from './DatePicker.tsx';
import { Dayjs } from 'dayjs';

export default function ExampleDatePicker(props: DatePickerProps) {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  return <DatePicker {...props} value={value} setValue={setValue} />;
}

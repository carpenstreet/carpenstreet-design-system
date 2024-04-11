import React from 'react';
import { DatePickerProps } from './DatePicker.types.ts';
import DatePicker from './DatePicker.tsx';
import { Dayjs } from 'dayjs';

export default function ExampleDatePicker(props: DatePickerProps) {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  return <DatePicker value={value} setValue={setValue} locale={props.locale} />;
}

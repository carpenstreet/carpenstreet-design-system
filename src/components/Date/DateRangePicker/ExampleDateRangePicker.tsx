import React from 'react';
import DateRangePicker from './DateRangePicker.tsx';
import { Dayjs } from 'dayjs';
import { DateRangePickerProps } from './DateRangePicker.types.ts';

export default function ExampleDateRangePicker(props: DateRangePickerProps) {
  const [startDay, setStartDay] = React.useState<Dayjs | null>(null);
  const [endDay, setEndDay] = React.useState<Dayjs | null>(null);

  return <DateRangePicker startDay={startDay} setStartDay={setStartDay} endDay={endDay} setEndDay={setEndDay} locale={props.locale} />;
}

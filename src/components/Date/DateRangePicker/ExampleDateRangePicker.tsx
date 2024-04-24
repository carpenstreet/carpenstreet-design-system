import React from 'react';
import DateRangePicker from './DateRangePicker.tsx';
import { Dayjs } from 'dayjs';
import { DateRangePickerProps } from './DateRangePicker.types.ts';

export default function ExampleDateRangePicker(props: DateRangePickerProps) {
  const [startDay, setStartDay] = React.useState<Dayjs | null>(null);
  const [endDay, setEndDay] = React.useState<Dayjs | null>(null);

  function handleSelectStartDay(value: Dayjs) {
    setStartDay(value);
  }

  function handleSelectEndDay(value: Dayjs) {
    setEndDay(value);
  }

  return <DateRangePicker {...props} startDay={startDay} onSelectStartDay={handleSelectStartDay} endDay={endDay} onSelectEndDay={handleSelectEndDay} />;
}

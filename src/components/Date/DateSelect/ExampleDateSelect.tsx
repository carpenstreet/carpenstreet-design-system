import DateSelect from './DateSelect.tsx';
import React from 'react';
import dayjs from 'dayjs';
import { DateSelectProps } from './DateSelect.types.ts';
import { Box } from '@mui/material';
import DatePicker from '../DatePicker/DatePicker.tsx';
import DateRangePicker from '../DateRangePicker/DateRangePicker.tsx';

export default function ExampleDateSelect(props: DateSelectProps) {
  const { isRange, locale, focused } = props;

  const dateSelectRef = React.useRef(null);

  const [day, setDay] = React.useState(dayjs());
  const [startDay, setStartDay] = React.useState(dayjs());
  const [endDay, setEndDay] = React.useState(dayjs());

  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showDateRangePicker, setShowDateRangePicker] = React.useState(false);

  function handleShowDatePicker() {
    setShowDatePicker((p) => !p);
  }
  function handleShowDateRangePicker() {
    setShowDateRangePicker((p) => !p);
  }

  function handleClick() {
    if (!isRange) handleShowDatePicker();
    else handleShowDateRangePicker();
  }

  return (
    <Box
      sx={{
        position: 'relative',
        height: '450px',
      }}
    >
      <DateSelect ref={dateSelectRef} {...props} value={!isRange ? day : { startDay, endDay }} onClick={handleClick} focused={focused || showDatePicker || showDateRangePicker} />
      {showDatePicker && (
        <DatePicker
          value={day}
          setValue={setDay}
          locale={locale}
          anchorRef={dateSelectRef}
          onClose={handleShowDatePicker}
          showController={true}
          sx={{
            position: 'absolute',
          }}
        />
      )}
      {showDateRangePicker && (
        <DateRangePicker
          startDay={startDay}
          setStartDay={setStartDay}
          endDay={endDay}
          setEndDay={setEndDay}
          locale={locale}
          onClose={handleShowDateRangePicker}
          anchorRef={dateSelectRef}
          showController={true}
          sx={{
            position: 'absolute',
          }}
        />
      )}
    </Box>
  );
}

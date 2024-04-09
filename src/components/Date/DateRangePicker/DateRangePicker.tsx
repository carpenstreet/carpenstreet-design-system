import { useTheme } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isBetween from 'dayjs/plugin/isBetween';
import React from 'react';
import { Box } from '@mui/material';
import Toolbar from '../Toolbar/Toolbar.tsx';
import DayLabel from '../DayLabel/DayLabel.tsx';
import DateRangeElement from '../DateRangeElement/DateRangeElement.tsx';
import { DateRangePickerProps } from './DateRangePicker.types.ts';
import MonthPicker from '../MonthPicker/MonthPicker.tsx';
import YearPicker from '../YearPicker/YearPicker.tsx';

dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

export default function DateRangePicker(props: DateRangePickerProps) {
  const { startDay, setStartDay, endDay, setEndDay } = props;

  const theme = useTheme();

  const today = dayjs();

  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [currentDay, setCurrentDay] = React.useState(dayjs());
  const [clickCount, setClickCount] = React.useState(0);
  const [showYearPicker, setShowYearPicker] = React.useState(false);
  const [showMonthPicker, setShowMonthPicker] = React.useState(false);

  const daysInMonth = currentDay.daysInMonth();

  const startIndexOfMonth = Number(currentDay.startOf('month').format('d'));

  const convertedStartIndexOfMonth = startIndexOfMonth - 1 >= 0 ? startIndexOfMonth - 1 : 6;

  const weekRowsInMonth = Math.ceil((daysInMonth - (7 - convertedStartIndexOfMonth)) / 7) + 1;

  function handleSelectDate(newDate: number) {
    return () => {
      if (clickCount === 0) {
        setStartDay(null);
        setEndDay(null);
        setStartDay(currentDay.date(newDate));
        setClickCount(1);
      } else if (clickCount === 1) {
        setEndDay(currentDay.date(newDate));
        setClickCount(0);
      }
    };
  }

  function makeHandleSelectYear(newYear: number) {
    return () => {
      setCurrentDay(currentDay.year(newYear));
    };
  }

  function makeHandleSelectMonth(newMonthIndex: number) {
    return () => {
      setCurrentDay(currentDay.month(newMonthIndex));
    };
  }

  function handleShowYearPicker() {
    if (showMonthPicker) setShowMonthPicker(false);
    setShowYearPicker((p) => !p);
  }

  function handleShowMonthPicker() {
    if (showYearPicker) setShowYearPicker(false);
    setShowMonthPicker((p) => !p);
  }

  function handlePreviousMonth() {
    setCurrentDay(currentDay.subtract(1, 'month'));
  }

  function handleNextMonth() {
    setCurrentDay(currentDay.add(1, 'month'));
  }

  const toolbarProps = {
    onPreviousMonth: handlePreviousMonth,
    onNextMonth: handleNextMonth,
    showYearPicker,
    onShowYearPicker: handleShowYearPicker,
    showMonthPicker,
    onShowMonthPicker: handleShowMonthPicker,
    currentDay,
  };

  // 바깥 영역 클릭시 monthPicker 혹은 yearPicker 닫기
  React.useEffect(() => {
    const handleDropdownHide = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        if (showYearPicker) setShowYearPicker(false);
        if (showMonthPicker) setShowMonthPicker(false);
      }
    };
    document.addEventListener('mousedown', handleDropdownHide);
    return () => {
      document.removeEventListener('mousedown', handleDropdownHide);
    };
  }, [showYearPicker, showMonthPicker]);

  React.useEffect(() => {
    const contentDiv = contentRef.current;
    if (contentDiv && showYearPicker) {
      const rowIndexOfCurrentYear = Math.ceil((currentDay.year() - 1900) / 3);
      const scrollY = 74 * (rowIndexOfCurrentYear - 2);
      contentDiv.scrollTo({ top: scrollY, behavior: 'instant' });
    }
  }, [contentRef.current, showYearPicker]);

  React.useEffect(() => {
    if (startDay?.isSameOrAfter(endDay)) {
      const tmp = endDay;
      setEndDay(startDay);
      setStartDay(tmp);
    }
  }, [startDay?.format('YYYY-MM-DD'), endDay?.format('YYYY-MM-DD')]);

  return (
    <Box
      ref={containerRef}
      sx={{
        boxShadow: theme.shadows[2],
        borderRadius: '12px',
        width: '320px',
        height: '360px',
      }}
    >
      <Toolbar {...toolbarProps} />

      <DayLabel show={!showMonthPicker && !showYearPicker} />

      {/* content */}
      <Box
        ref={contentRef}
        sx={{
          paddingLeft: '28px',
          paddingRight: '28px',
          maxHeight: '294px',
          overflow: 'scroll',
        }}
      >
        {showMonthPicker ? (
          <MonthPicker currentDay={currentDay} makeOnSelectMonth={makeHandleSelectMonth} />
        ) : showYearPicker ? (
          <YearPicker currentDay={currentDay} makeOnSelectYear={makeHandleSelectYear} />
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {[...Array(weekRowsInMonth).keys()].map((row, index) => {
              return (
                <Box
                  key={`week-${index}`}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  {index === 0
                    ? [...Array(7).keys()].map((col) => {
                        if (col < convertedStartIndexOfMonth)
                          return (
                            <Box
                              key={`week-${index}-blank-${row * 7 + col}`}
                              sx={{
                                width: '36px',
                                height: '36px',
                              }}
                            />
                          );
                        const date = col - convertedStartIndexOfMonth + 1;
                        const isToday = today.isSame(currentDay.date(date), 'day');
                        const isStart = startDay?.isSame(currentDay.date(date), 'day');
                        const isEnd = endDay?.isSame(currentDay.date(date), 'day');
                        const isBetween = startDay && endDay && currentDay.date(date).isBetween(startDay, endDay);
                        return (
                          <DateRangeElement key={`week-${index}-date-${date}`} today={isToday} start={isStart} end={isEnd} between={isBetween} onClick={handleSelectDate(date)}>
                            {date}
                          </DateRangeElement>
                        );
                      })
                    : [...Array(7).keys()].map((col) => {
                        const date = row * 7 + col - convertedStartIndexOfMonth + 1;
                        if (date > daysInMonth)
                          return (
                            <Box
                              key={`week-${index}-blank-${row * 7 + col}`}
                              sx={{
                                width: '36px',
                                height: '36px',
                              }}
                            />
                          );
                        const isToday = today.isSame(currentDay.date(date), 'day');
                        const isStart = startDay?.isSame(currentDay.date(date), 'day');
                        const isEnd = endDay?.isSame(currentDay.date(date), 'day');
                        const isBetween = startDay && endDay && currentDay.date(date).isBetween(startDay, endDay);
                        return (
                          <DateRangeElement key={`week-${index}-date-${date}`} today={isToday} start={isStart} end={isEnd} between={isBetween} onClick={handleSelectDate(date)}>
                            {date}
                          </DateRangeElement>
                        );
                      })}
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
}

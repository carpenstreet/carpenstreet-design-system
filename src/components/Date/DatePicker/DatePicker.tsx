import React from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DateElement from '../DateElement/DateElement.tsx';
import Toolbar from '../Toolbar/Toolbar.tsx';
import DayLabel from '../DayLabel/DayLabel.tsx';
import { DatePickerProps } from './DatePicker.types.ts';
import MonthPicker from '../MonthPicker/MonthPicker.tsx';
import YearPicker from '../YearPicker/YearPicker.tsx';

export default function DatePicker(props: DatePickerProps) {
  const { value, setValue } = props;

  const theme = useTheme();

  const today = dayjs();

  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [currentDay, setCurrentDay] = React.useState(dayjs());
  const [showYearPicker, setShowYearPicker] = React.useState(false);
  const [showMonthPicker, setShowMonthPicker] = React.useState(false);

  const daysInMonth = currentDay.daysInMonth();

  const startIndexOfMonth = Number(currentDay.startOf('month').format('d'));

  const convertedStartIndexOfMonth = startIndexOfMonth - 1 >= 0 ? startIndexOfMonth - 1 : 6;

  const weekRowsInMonth = Math.ceil((daysInMonth - (7 - convertedStartIndexOfMonth)) / 7) + 1;

  function handleSelectDate(newDate: number) {
    return () => {
      setValue(currentDay.date(newDate));
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
                        const isSelected = value?.isSame(currentDay.date(date), 'day');
                        return (
                          <DateElement key={`week-${index}-date-${date}`} today={isToday} selected={isSelected} onClick={handleSelectDate(date)}>
                            {String(date).padStart(2, '0')}
                          </DateElement>
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
                        const isSelected = value?.isSame(currentDay.date(date), 'day');
                        return (
                          <DateElement key={`week-${index}-date-${date}`} today={isToday} selected={isSelected} onClick={handleSelectDate(date)}>
                            {String(date).padStart(2, '0')}
                          </DateElement>
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

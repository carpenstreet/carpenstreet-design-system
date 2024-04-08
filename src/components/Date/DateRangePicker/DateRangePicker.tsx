import { useTheme } from '@mui/material/styles';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { Box } from '@mui/material';
import Toolbar from '../Toolbar/Toolbar.tsx';
import DayLabel from '../DayLabel/DayLabel.tsx';
import DateElement from '../DateElement/DateElement.tsx';

export default function DateRangePicker() {
  const theme = useTheme();

  const today = dayjs();

  const contentRef = React.useRef<HTMLDivElement>(null);

  const [currentDay, setCurrentDay] = React.useState(dayjs());
  const [startDay, setStartDay] = React.useState<Dayjs | null>(dayjs());
  const [endDay, setEndDay] = React.useState<Dayjs | null>(dayjs());
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

  function handleSelectYear(newYear: number) {
    return () => {
      setCurrentDay(currentDay.year(newYear));
    };
  }

  function handleSelectMonth(newMonthIndex: number) {
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

  React.useEffect(() => {
    const contentDiv = contentRef.current;
    if (contentDiv && showYearPicker) {
      const rowIndexOfCurrentYear = Math.ceil((currentDay.year() - 1900) / 3);
      const scrollY = 78 * (rowIndexOfCurrentYear - 2);
      contentDiv.scrollTo({ top: scrollY, behavior: 'instant' });
    }
  }, [contentRef.current, showYearPicker]);

  const toolbarProps = {
    onPreviousMonth: handlePreviousMonth,
    onNextMonth: handleNextMonth,
    showYearPicker,
    onShowYearPicker: handleShowYearPicker,
    showMonthPicker,
    onShowMonthPicker: handleShowMonthPicker,
    currentDay,
  };

  return (
    <Box
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[...Array(4).keys()].map((row) => {
              return (
                <Box
                  key={`month-${row}`}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px 12px',
                    width: '100%',
                  }}
                >
                  {[...Array(3).keys()].map((col) => {
                    const monthIndex = row * 3 + col;
                    const isSelected = monthIndex === currentDay.month();
                    return (
                      <DateElement key={monthIndex} wide selected={isSelected} onClick={handleSelectMonth(monthIndex)}>
                        {dayjs().month(monthIndex).format('MM')}
                      </DateElement>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        ) : showYearPicker ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[...Array(67).keys()].map((row) => {
              return (
                <Box
                  key={`year-${row}`}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px 12px',
                    width: '100%',
                  }}
                >
                  {[...Array(3).keys()].map((col) => {
                    const year = 1900 + row * 3 + col;
                    const isSelected = year === currentDay.year();
                    return (
                      <DateElement key={year} wide selected={isSelected} onClick={handleSelectYear(year)}>
                        {dayjs().year(year).format('YYYY')}
                      </DateElement>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
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
                        const isSelected = startDay?.isSame(currentDay.date(date), 'day') || endDay?.isSame(currentDay.date(date), 'day');
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
                        const isSelected = startDay?.isSame(currentDay.date(date), 'day') || endDay?.isSame(currentDay.date(date), 'day');
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

import React from 'react';
import dayjs from 'dayjs';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Toolbar from '../Toolbar/Toolbar.tsx';
import DayLabel from '../DayLabel/DayLabel.tsx';
import { DatePickerProps } from './DatePicker.types.ts';
import MonthPicker from '../MonthPicker/MonthPicker.tsx';
import YearPicker from '../YearPicker/YearPicker.tsx';
import DatePickerContent from '../DatePickerContent/DatePickerContent.tsx';

export default function DatePicker(props: DatePickerProps) {
  const { value, setValue, onClose, locale } = props;

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

  function makeHandleSelectDate(newDate: number) {
    return () => {
      if (value?.isSame(currentDay.date(newDate), 'day')) setValue(null);
      else setValue(currentDay.date(newDate));
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

  const contentProps = {
    value,
    today,
    currentDay,
    startDayIndex: convertedStartIndexOfMonth,
    numberOfWeeks: weekRowsInMonth,
    daysInMonth,
    makeOnSelectDate: makeHandleSelectDate,
  };

  // 바깥 영역 클릭시 onClose 실행
  React.useEffect(() => {
    const handleDropdownHide = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target) && onClose) {
        onClose();
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
      {!showMonthPicker && !showYearPicker && <DayLabel locale={locale} />}
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
          <DatePickerContent {...contentProps} />
        )}
      </Box>
    </Box>
  );
}

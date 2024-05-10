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
import Controller from '../Controller/Controller.tsx';

export default function DatePicker(props: DatePickerProps) {
  const {
    value,
    onSelectValue,
    onClose,
    locale,
    unit = 'day',
    sx: sxOverride,
    toolbarSx,
    dayLabelSx,
    monthPickerSx,
    yearPickerSx,
    contentSx,
    anchorRef,
    showController,
    controllerSx,
  } = props;

  if (onClose && !anchorRef) console.error('Design system DatePicker props error: onClose props는 anchorRef props와 함께 사용되어야 합니다.');
  if (!onClose && anchorRef) console.error('Design system DatePicker props error: anchorRef props는 onClose props와 함께 사용되어야 합니다.');

  const theme = useTheme();

  const { current: today } = React.useRef(dayjs());
  const containerRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const [currentDay, setCurrentDay] = React.useState(value || today);
  const [showYearPicker, setShowYearPicker] = React.useState(false);
  const [showMonthPicker, setShowMonthPicker] = React.useState(false);

  const daysInMonth = currentDay.daysInMonth();

  const startIndexOfMonth = Number(currentDay.startOf('month').format('d'));

  const convertedStartIndexOfMonth = startIndexOfMonth - 1 >= 0 ? startIndexOfMonth - 1 : 6;

  const weekRowsInMonth = Math.ceil((daysInMonth - (7 - convertedStartIndexOfMonth)) / 7) + 1;

  function makeHandleSelectDate(newDate: number) {
    return () => {
      onSelectValue(currentDay.date(newDate));
    };
  }

  function makeHandleSelectYear(newYear: number) {
    return unit === 'day'
      ? () => {
          setCurrentDay(currentDay.year(newYear));
          setShowYearPicker(false);
        }
      : () => {
          setCurrentDay(currentDay.year(newYear));
          onSelectValue(currentDay.year(newYear));
        };
  }

  function makeHandleSelectMonth(newMonthIndex: number) {
    return unit === 'day'
      ? () => {
          setCurrentDay(currentDay.month(newMonthIndex));
          setShowMonthPicker(false);
        }
      : () => {
          setCurrentDay(currentDay.month(newMonthIndex));
          onSelectValue(currentDay.month(newMonthIndex));
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

  function handlePreviousYear() {
    setCurrentDay(currentDay.subtract(1, 'year'));
    onSelectValue(currentDay.subtract(1, 'year'));
  }

  function handleNextYear() {
    setCurrentDay(currentDay.add(1, 'year'));
    onSelectValue(currentDay.add(1, 'year'));
  }

  function handleResetDate() {
    onSelectValue(null);
  }

  const toolbarProps = {
    onPreviousMonth: handlePreviousMonth,
    onNextMonth: handleNextMonth,
    onPreviousYear: handlePreviousYear,
    onNextYear: handleNextYear,
    showYearPicker,
    onShowYearPicker: handleShowYearPicker,
    showMonthPicker,
    onShowMonthPicker: handleShowMonthPicker,
    currentDay,
    locale,
    unit,
    sx: toolbarSx,
  };

  const contentProps = {
    value,
    today,
    currentDay,
    startDayIndex: convertedStartIndexOfMonth,
    numberOfWeeks: weekRowsInMonth,
    daysInMonth,
    makeOnSelectDate: makeHandleSelectDate,
    sx: contentSx,
  };

  // 바깥 영역 클릭시 onClose 실행
  React.useEffect(() => {
    const handleDropdownHide = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target) && anchorRef.current && !anchorRef.current.contains(e.target) && onClose) {
        // onClose가 두 번 동작하여 닫혔다가 다시 열리는 것을 방지하기 위해 anchorEl을 클릭했을 땐 onClose 실행하지 않음
        // 단, anchorEl에선 onClose가 정상적으로 작동해야 함
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
    if (contentDiv && (showYearPicker || unit === 'year')) {
      const rowIndexOfCurrentYear = Math.ceil((currentDay.year() - 1900) / 3);
      const scrollY = 58 * (rowIndexOfCurrentYear - 2);
      contentDiv.scrollTo({ top: scrollY, behavior: 'instant' });
    }
  }, [showYearPicker, unit]);

  return (
    <Box
      ref={containerRef}
      sx={{
        boxShadow: theme.shadows[2],
        borderRadius: '12px',
        width: '320px',
        paddingBottom: '12px',
        ...sxOverride,
      }}
    >
      {unit !== 'year' && <Toolbar {...toolbarProps} />}
      {!showMonthPicker && !showYearPicker && unit === 'day' && <DayLabel locale={locale} sx={dayLabelSx} />}
      {/* content */}
      <Box
        ref={contentRef}
        sx={{
          paddingLeft: '28px',
          paddingRight: '28px',
          maxHeight: '248px',
          overflow: 'auto',
        }}
      >
        {unit === 'day' ? (
          showMonthPicker ? (
            <MonthPicker currentDay={currentDay} makeOnSelectMonth={makeHandleSelectMonth} locale={locale} sx={monthPickerSx} />
          ) : showYearPicker ? (
            <YearPicker currentDay={currentDay} makeOnSelectYear={makeHandleSelectYear} sx={yearPickerSx} />
          ) : (
            <DatePickerContent {...contentProps} />
          )
        ) : unit === 'month' ? (
          showYearPicker ? (
            <YearPicker currentDay={value} makeOnSelectYear={makeHandleSelectYear} sx={yearPickerSx} />
          ) : (
            <MonthPicker currentDay={value} makeOnSelectMonth={makeHandleSelectMonth} locale={locale} sx={monthPickerSx} />
          )
        ) : (
          <YearPicker currentDay={value} makeOnSelectYear={makeHandleSelectYear} sx={yearPickerSx} />
        )}
      </Box>
      {showController && <Controller onResetDate={handleResetDate} onClose={onClose} sx={controllerSx} locale={locale} />}
    </Box>
  );
}

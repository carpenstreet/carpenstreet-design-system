import { useTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isBetween from 'dayjs/plugin/isBetween';
import React from 'react';
import { Box } from '@mui/material';
import Toolbar from '../Toolbar/Toolbar.tsx';
import DayLabel from '../DayLabel/DayLabel.tsx';
import { DateRangePickerProps } from './DateRangePicker.types.ts';
import MonthPicker from '../MonthPicker/MonthPicker.tsx';
import YearPicker from '../YearPicker/YearPicker.tsx';
import DateRangePickerContent from '../DateRangePickerContent/DateRangePickerContent.tsx';
import Controller from '../Controller/Controller.tsx';

dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

export default function DateRangePicker(props: DateRangePickerProps) {
  const {
    startDay,
    onSelectStartDay,
    endDay,
    onSelectEndDay,
    onClose,
    locale,
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

  const [currentDay, setCurrentDay] = React.useState(dayjs());
  const [isFirstClick, setIsFirstClick] = React.useState(true);
  const [showYearPicker, setShowYearPicker] = React.useState(false);
  const [showMonthPicker, setShowMonthPicker] = React.useState(false);

  const daysInMonth = currentDay.daysInMonth();

  const startIndexOfMonth = Number(currentDay.startOf('month').format('d'));

  const convertedStartIndexOfMonth = startIndexOfMonth - 1 >= 0 ? startIndexOfMonth - 1 : 6;

  const weekRowsInMonth = Math.ceil((daysInMonth - (7 - convertedStartIndexOfMonth)) / 7) + 1;

  function makeHandleSelectDate(newDate: number) {
    return () => {
      if (isFirstClick) {
        onSelectStartDay(null);
        onSelectEndDay(null);
        onSelectStartDay(currentDay.date(newDate));
        setIsFirstClick(false);
      } else {
        onSelectEndDay(currentDay.date(newDate));
        setIsFirstClick(true);
      }
    };
  }

  function makeHandleSelectYear(newYear: number) {
    return () => {
      setCurrentDay(currentDay.year(newYear));
      setShowYearPicker(false);
    };
  }

  function makeHandleSelectMonth(newMonthIndex: number) {
    return () => {
      setCurrentDay(currentDay.month(newMonthIndex));
      setShowMonthPicker(false);
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

  function handleResetDate() {
    onSelectStartDay(null);
    onSelectEndDay(null);
  }

  const toolbarProps = {
    onPreviousMonth: handlePreviousMonth,
    onNextMonth: handleNextMonth,
    showYearPicker,
    onShowYearPicker: handleShowYearPicker,
    showMonthPicker,
    onShowMonthPicker: handleShowMonthPicker,
    currentDay,
    locale,
    sx: toolbarSx,
  };

  const contentProps = {
    startDay,
    endDay,
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
    if (contentDiv && showYearPicker) {
      const rowIndexOfCurrentYear = Math.ceil((currentDay.year() - 1900) / 3);
      const scrollY = 74 * (rowIndexOfCurrentYear - 2);
      contentDiv.scrollTo({ top: scrollY, behavior: 'instant' });
    }
  }, [showYearPicker]);

  React.useEffect(() => {
    if (startDay?.isSameOrAfter(endDay)) {
      const tmp = endDay;
      onSelectEndDay(startDay);
      onSelectStartDay(tmp);
    }
  }, [startDay?.format('YYYY-MM-DD'), endDay?.format('YYYY-MM-DD')]);

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
      <Toolbar {...toolbarProps} />

      {!showMonthPicker && !showYearPicker && <DayLabel locale={locale} sx={dayLabelSx} />}

      {/* content */}
      <Box
        ref={contentRef}
        sx={{
          paddingLeft: '28px',
          paddingRight: '28px',
          maxHeight: '294px',
          overflow: 'auto',
        }}
      >
        {showMonthPicker ? (
          <MonthPicker currentDay={currentDay} makeOnSelectMonth={makeHandleSelectMonth} locale={locale} sx={monthPickerSx} />
        ) : showYearPicker ? (
          <YearPicker currentDay={currentDay} makeOnSelectYear={makeHandleSelectYear} sx={yearPickerSx} />
        ) : (
          <DateRangePickerContent {...contentProps} />
        )}
      </Box>
      {showController && <Controller onResetDate={handleResetDate} onClose={onClose} sx={controllerSx} locale={locale} />}
    </Box>
  );
}

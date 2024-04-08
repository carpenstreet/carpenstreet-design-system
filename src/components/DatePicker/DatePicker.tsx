import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Box, TextField as MUITextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from '../IconButton/IconButton.tsx';
import ChevronLeftIcon from '../Icon/ChevronLeft/ChevronLeftIcon.tsx';
import ChevronRightIcon from '../Icon/ChevronRight/ChevronRightIcon.tsx';
import Typography from '../Typography/Typography.tsx';
import CaretDownIcon from '../Icon/CaretDown/CaretDownIcon.tsx';
import Button from '../Button/Button.tsx';
import { dayIndicesOfWeek, daysOfWeek } from './DatePicker.constants.ts';
import CaretUpIcon from '../Icon/CaretUp/CaretUpIcon.tsx';

export default function DatePicker(props: any) {
  const theme = useTheme();

  const today = dayjs();

  const contentRef = React.useRef<HTMLDivElement>(null);

  const [currentDay, setCurrentDay] = useState(dayjs());

  const [selectedDay, setSelectedDay] = React.useState(dayjs());

  function handleSelectDate(newDate: number) {
    return () => {
      setSelectedDay(currentDay.date(newDate));
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

  const daysInMonth = currentDay.daysInMonth();

  const startIndexOfMonth = Number(currentDay.startOf('month').format('d'));

  const convertedStartIndexOfMonth = startIndexOfMonth - 1 >= 0 ? startIndexOfMonth - 1 : 6;

  const weekRowsInMonth = Math.ceil((daysInMonth - (7 - convertedStartIndexOfMonth)) / 7) + 1;

  const [showYearPicker, setShowYearPicker] = React.useState(false);
  function handleShowYearPicker() {
    if (showMonthPicker) setShowMonthPicker(false);
    setShowYearPicker((p) => !p);
  }

  const [showMonthPicker, setShowMonthPicker] = React.useState(false);
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
      const scrollY = 74 * (rowIndexOfCurrentYear - 2);
      contentDiv.scrollTo({ top: scrollY, behavior: 'instant' });
    }
  }, [contentRef.current, showYearPicker]);

  return (
    <Box
      sx={{
        boxShadow: theme.shadows[2],
        borderRadius: '12px',
        width: '320px',
        height: '360px',
      }}
    >
      {/* toolbar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          padding: '16px 12px',
        }}
      >
        <IconButton color={'default'} size={'S'} onClick={handlePreviousMonth}>
          <ChevronLeftIcon />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Button variant={'text'} size={'L'} weight={'bold'} endIcon={showYearPicker ? <CaretUpIcon /> : <CaretDownIcon />} onClick={handleShowYearPicker}>
            {currentDay.format('YYYY')}
          </Button>
          <Button variant={'text'} size={'L'} weight={'bold'} endIcon={showMonthPicker ? <CaretUpIcon /> : <CaretDownIcon />} onClick={handleShowMonthPicker}>
            {currentDay.format('MM')}
          </Button>
        </Box>
        <IconButton color={'default'} size={'S'} onClick={handleNextMonth}>
          <ChevronRightIcon />
        </IconButton>
      </Box>

      {/* label - days */}
      {!showYearPicker && !showMonthPicker && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: '28px',
            paddingRight: '28px',
          }}
        >
          {dayIndicesOfWeek.map((dayIndex) => (
            <Typography
              variant={'typography/label/large/regular'}
              color={'color/gray/500'}
              sx={{
                width: '36px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {daysOfWeek[dayIndex]}
            </Typography>
          ))}
        </Box>
      )}

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
                      <Element
                        key={monthIndex}
                        wide
                        selected={isSelected}
                        onClick={handleSelectMonth(monthIndex)}
                        sx={{
                          borderRadius: '1000px',
                          width: '60px',
                          height: '32px',
                        }}
                      >
                        {dayjs().month(monthIndex).format('MM')}
                      </Element>
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
                      <Element
                        key={year}
                        wide
                        selected={isSelected}
                        onClick={handleSelectYear(year)}
                        sx={{
                          borderRadius: '1000px',
                          width: '60px',
                          height: '32px',
                        }}
                      >
                        {dayjs().year(year).format('YYYY')}
                      </Element>
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
                        const isSelected = selectedDay.isSame(currentDay.date(date), 'day');
                        return (
                          <Element key={`week-${index}-date-${date}`} today={isToday} selected={isSelected} onClick={handleSelectDate(date)}>
                            {String(date).padStart(2, '0')}
                          </Element>
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
                        const isSelected = selectedDay.isSame(currentDay.date(date), 'day');
                        return (
                          <Element key={`week-${index}-date-${date}`} today={isToday} selected={isSelected} onClick={handleSelectDate(date)}>
                            {String(date).padStart(2, '0')}
                          </Element>
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

function Element(props: {
  children: React.ReactNode;
  wide?: boolean;
  selected?: boolean;
  today?: boolean;
  event?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  sx?: any;
}) {
  const { children, wide, selected, today, event, disabled, onClick, sx: sxOverride } = props;

  const theme = useTheme();

  const typoVariant = selected ? 'typography/body/small/medium' : 'typography/body/small/regular';

  const sx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '36px',
    height: '36px',
    borderRadius: wide ? '1000px' : '50px',
    cursor: 'pointer',
    color: theme.palette['color/gray/800'],
    ...(wide && { width: '60px' }),
    ...(event && {
      backgroundColor: theme.palette['color/primary/dim/200'],
    }),
    ...(today && {
      boxShadow: `0px 0px 0px 1px ${theme.palette['color/gray/600']} inset`,
    }),
    '&:hover': {
      backgroundColor: event ? theme.palette['color/primary/dim/400'] : theme.palette['color/gray/100'],
    },
    ...(selected && {
      '&, &:hover': {
        backgroundColor: theme.palette['color/primary/600'],
        color: theme.palette['color/white'],
        boxShadow: 'unset',
      },
    }),
    ...(disabled && {
      backgroundColor: 'unset',
      color: theme.palette['color/gray/200'],
    }),
    ...sxOverride,
  };

  return (
    <Typography variant={typoVariant} sx={sx} onClick={onClick}>
      {children}
    </Typography>
  );
}

import React from 'react';
import IconButton from '../../IconButton/IconButton.tsx';
import ChevronLeftIcon from '../../Icon/ChevronLeft/ChevronLeftIcon.tsx';
import { Box } from '@mui/material';
import Button from '../../Button/Button.tsx';
import CaretUpIcon from '../../Icon/CaretUp/CaretUpIcon.tsx';
import CaretDownIcon from '../../Icon/CaretDown/CaretDownIcon.tsx';
import ChevronRightIcon from '../../Icon/ChevronRight/ChevronRightIcon.tsx';
import { ToolbarProps } from './Toolbar.types.ts';

export default function Toolbar(props: ToolbarProps) {
  const {
    onPreviousMonth,
    onNextMonth,
    onPreviousYear,
    onNextYear,
    showMonthPicker,
    onShowMonthPicker,
    showYearPicker,
    onShowYearPicker,
    currentDay,
    locale,
    sx: sxOverride,
    unit = 'day',
  } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '16px 12px',
        ...sxOverride,
      }}
    >
      <IconButton color={'default'} size={'S'} onClick={unit === 'day' ? onPreviousMonth : onPreviousYear}>
        <ChevronLeftIcon />
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {unit === 'day' ? (
          locale === 'ko' ? (
            <>
              <Button variant={'text'} size={'L'} weight={'bold'} endIcon={showYearPicker ? <CaretUpIcon /> : <CaretDownIcon />} onClick={onShowYearPicker}>
                {currentDay.format('YYYY')}
              </Button>
              <Button variant={'text'} size={'L'} weight={'bold'} endIcon={showMonthPicker ? <CaretUpIcon /> : <CaretDownIcon />} onClick={onShowMonthPicker}>
                {currentDay.format('MM')}
              </Button>
            </>
          ) : (
            <>
              <Button variant={'text'} size={'L'} weight={'bold'} endIcon={showMonthPicker ? <CaretUpIcon /> : <CaretDownIcon />} onClick={onShowMonthPicker}>
                {currentDay.format('MMM')}
              </Button>
              <Button variant={'text'} size={'L'} weight={'bold'} endIcon={showYearPicker ? <CaretUpIcon /> : <CaretDownIcon />} onClick={onShowYearPicker}>
                {currentDay.format('YYYY')}
              </Button>
            </>
          )
        ) : unit === 'month' ? (
          <Button variant={'text'} size={'L'} weight={'bold'} endIcon={showYearPicker ? <CaretUpIcon /> : <CaretDownIcon />} onClick={onShowYearPicker}>
            {currentDay.format('YYYY')}
          </Button>
        ) : (
          <></>
        )}
      </Box>
      <IconButton color={'default'} size={'S'} onClick={unit === 'day' ? onNextMonth : onNextYear}>
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}

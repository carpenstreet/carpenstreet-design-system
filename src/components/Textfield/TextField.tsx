import {
  FormControl as MUIFormControl,
  InputLabel as MUIInputLabel,
  FormHelperText as MUIFormHelperText,
  useFormControl,
  Box as MUIBox,
  FormControlProps as MUIFormControlProps,
  OutlinedInputProps as MUIOutlinedInputProps,
} from '@mui/material';
import { TextFieldProps, HelperTextProps, InputLabelProps, InputMore, CustomTextFieldVariants } from './TextField.types.ts';
import { useTheme } from '@mui/material/styles';
import { CustomTypographyVariants } from '../Typography/Typography.constants.ts';
import React from 'react';
import { CheckIcon, AlertIcon, InformationIcon, NoticeIcon } from '../Icon';
import { unstable_useId } from '@mui/utils';
import { variantInputComponent } from './Textfield.constants.ts';

export default function TextField<Variant extends CustomTextFieldVariants>(props: TextFieldProps<Variant>) {
  const {
    autoComplete,
    autoFocus = false,
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps: FormHelperTextPropsOverride,
    fullWidth = false,
    helperText,
    id: idOverride,
    InputLabelProps: InputLabelPropsOverride,
    inputProps,
    InputProps: InputPropsOverride,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    size,
    type,
    value,
    variant,
    success,
    withHelperTextIcon,
    ...rest
  } = props;

  const id = unstable_useId(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;

  const FormControlProps: MUIFormControlProps = {
    disabled,
    error,
    fullWidth,
    required,
    variant,
    size,
    ...rest,
  };

  const InputLabelProps: InputLabelProps = {
    id: inputLabelId,
    htmlFor: id,
    withStartIcon: InputPropsOverride.startAdornment !== undefined,
    size,
    ...InputLabelPropsOverride,
  };

  const InputProps: TextFieldProps['InputProps'] = {
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    id,
    'aria-describedby': helperTextId,
    inputProps,
    inputRef,
    maxRows,
    minRows,
    multiline,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    rows,
    type,
    value,
    size,
    ...InputPropsOverride,
  };

  const InputMore: InputMore = {};
  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label;
  }

  const FormHelperTextProps: HelperTextProps = {
    id: helperTextId,
    success,
    withIcon: withHelperTextIcon,
    ...FormHelperTextPropsOverride,
  };

  return (
    <MUIFormControl {...FormControlProps}>
      {label !== null && label !== '' && <InputLabel {...InputLabelProps}>{label}</InputLabel>}
      <Input {...InputProps} {...InputMore} />
      {helperText && <HelperText {...FormHelperTextProps}>{helperText}</HelperText>}
    </MUIFormControl>
  );
}

function InputLabel(props: InputLabelProps) {
  const { withStartIcon, children, ...rest } = props;
  const { size, sx: sxOverride } = rest;

  const theme = useTheme();

  const control = useFormControl();
  const { focused, filled, variant } = control;

  const sx = {
    typography: theme.typography['typography/body/medium/regular'],
    ...(withStartIcon && {
      left: '32px',
    }),
    color: theme.palette['color/gray/400'],

    '&.Mui-error': {
      color: theme.palette['color/gray/400'],
    },

    '&.Mui-disabled': {
      color: theme.palette['color/gray/200'],
    },

    '&.MuiInputLabel-shrink': {
      top: 0,
      left: 0,
      typography: theme.typography['typography/caption/regular'],

      '&.Mui-focused': {
        color: theme.palette['color/primary/600'],
      },

      '&.Mui-error': {
        color: theme.palette['color/state/error'],
      },

      '&.Mui-disabled': {
        color: theme.palette['color/gray/200'],
      },
    },

    ...(variant === 'outlined' && {
      // Label 위치를 맞추기 위한 코드
      top: `calc(-${CustomTypographyVariants['typography/body/medium/regular'].fontSize} + ${size === 'M' ? '16px' : '8px'})`,
    }),
    ...sxOverride,
  };

  return (
    <MUIInputLabel {...rest} shrink={focused || filled} sx={sx}>
      {children}
    </MUIInputLabel>
  );
}

function Input(props: MUIOutlinedInputProps) {
  const { size, inputProps, sx: sxOverride } = props;

  const theme = useTheme();

  const control = useFormControl();
  const { variant, focused, filled } = control;

  const InputComponent = variantInputComponent[variant];

  const inputSx = {
    ...(variant === 'standard' && {
      paddingTop: size === 'M' ? '4px' : '2.5px',
      paddingBottom: size === 'M' ? '6.5px' : '5px',
      height: '24px',
    }),
    ...(variant === 'outlined' && {
      padding: 'unset',

      '&.Mui-disabled': {
        '-webkit-text-fill-color': 'unset',
      },
    }),
  };

  const sx = {
    typography: theme.typography['typography/body/medium/regular'],
    gap: '8px',

    ...(variant === 'standard' && {
      color: theme.palette['color/gray/800'],

      marginTop: '13.5px',
      '&:before': {
        borderColor: theme.palette['color/gray/dim/400'],
      },
      '&:after': {
        transition: 'none',
      },

      '&:hover:not(.Mui-disabled, .Mui-error):before': {
        // :not(.Mui-disabled, .Mui-error) 를 selector에 포함하지 않으면 우선순위에서 밀림
        borderBottom: `1px solid ${theme.palette['color/gray/600']}`,
      },

      '&.Mui-focused:after': {
        borderBottom: `1px solid ${theme.palette['color/primary/600']}`,
      },

      '&.Mui-error:before, &.Mui-error:after': {
        borderBottom: `1px solid ${theme.palette['color/state/error']}`,
      },

      '&.Mui-disabled': {
        color: theme.palette['color/gray/200'],
      },
      '&.Mui-disabled:before, &.Mui-disabled:after': {
        borderBottom: `1px solid ${theme.palette['color/gray/200']}`,
      },
    }),

    ...(variant === 'outlined' && {
      padding: size === 'M' ? '16px 12px' : '8px 12px',
      borderRadius: '8px',
      border: theme.palette['color/gray/dim/400'],
      color: theme.palette['color/gray/400'],

      '& svg': {
        width: '24px',
        height: '24px',
      },

      '&:hover': {
        color: theme.palette['color/gray/800'],
        borderColor: theme.palette['color/gray/dim/600'],
      },

      '&.Mui-focused': {
        color: theme.palette['color/gray/800'],

        '.MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette['color/primary/600'],
          borderWidth: '1px',
        },
      },

      '&.Mui-error': {
        color: theme.palette['color/gray/800'],

        '.MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette['color/state/error'],
        },
      },

      '&.Mui-disabled': {
        color: theme.palette['color/gray/200'],
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette['color/gray/200'],
        },

        '& path, & circle': {
          fill: theme.palette['color/gray/400'],
        },
        '& rect': {
          stroke: theme.palette['color/gray/400'],
        },
      },
    }),
    ...sxOverride,
  };

  return <InputComponent {...props} inputProps={{ ...inputProps, sx: inputSx }} sx={sx} notched={focused || filled} />;
}

function HelperText(props: HelperTextProps) {
  const { children, success, withIcon, ...rest } = props;
  const { sx: sxOverride } = rest;

  const theme = useTheme();

  const control = useFormControl();
  const { error, disabled, variant } = control;

  const sx = {
    margin: 'unset',
    marginTop: '8px',
    color: theme.palette['color/gray/800'],
    '& path, & circle': {
      fill: theme.palette['color/gray/600'],
    },
    '& rect': {
      stroke: theme.palette['color/gray/600'],
    },

    ...(success && {
      color: theme.palette['color/state/success'],
      '& path, & circle': {
        fill: theme.palette['color/state/success'],
      },
      '& rect': {
        stroke: theme.palette['color/state/success'],
      },
    }),

    '&.Mui-error': {
      color: theme.palette['color/state/error'],
      '& path, & circle': {
        fill: theme.palette['color/state/error'],
      },
      '& rect': {
        stroke: theme.palette['color/state/error'],
      },
    },

    '&.Mui-disabled': {
      color: theme.palette['color/gray/400'],
      '& path, & circle': {
        fill: theme.palette['color/gray/400'],
      },
      '& rect': {
        stroke: theme.palette['color/gray/400'],
      },
    },
    ...(variant === 'outlined' && { marginLeft: '12px' }),
    ...sxOverride,
  };

  const icon = (() => {
    if (!withIcon) return null;
    const dimension = {
      width: 16,
      height: 16,
    };
    if (disabled) return <InformationIcon {...dimension} />;
    if (error) return <AlertIcon {...dimension} />;
    if (success) return <CheckIcon {...dimension} />;
    return <NoticeIcon {...dimension} />;
  })();

  return (
    <MUIFormHelperText {...rest} sx={sx} error={error}>
      <MUIBox sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        {withIcon && icon}
        {children}
      </MUIBox>
    </MUIFormHelperText>
  );
}
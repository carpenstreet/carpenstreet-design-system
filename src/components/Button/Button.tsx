import MUIButton from '@mui/material/Button';
import React from 'react';
import { Typography } from '@components';
import { CustomTypographyVariantsTypes } from '@components/Typography/Typography.types.ts';
import { ButtonProps } from '@components/Button/Button.type.ts';
import { IconCommonPropsType } from '@components/Icon/Icon.types.ts';

export default function Button(props: ButtonProps) {
  const { children, startIcon, endIcon, ...rest } = props;
  const { variant, size, weight, color, disabled } = rest;

  const typoVariant = ((): CustomTypographyVariantsTypes => {
    if (variant === 'contained') {
      if (size === 'L' || size === 'XL') return 'typography/body/medium/bold';
      if (size === 'M') return 'typography/body/small/bold';
      if (size === 'S') return 'typography/label/large/bold';
    }
    if (variant === 'outlined') {
      if (size === 'L' || size === 'XL') return 'typography/body/medium/bold';
      if (size === 'M') return 'typography/body/small/bold';
      if (size === 'S') return 'typography/label/large/bold';
    }
    if (variant === 'text') {
      if (weight === 'regular') {
        if (size === 'XL') return 'typography/title/medium/regular';
        if (size === 'L') return 'typography/body/medium/regular';
        if (size === 'M') return 'typography/body/small/regular';
        if (size === 'S') return 'typography/label/large/regular';
      }
      if (weight === 'bold') {
        if (size === 'XL') return 'typography/title/medium/bold';
        if (size === 'L') return 'typography/body/medium/bold';
        if (size === 'M') return 'typography/body/small/bold';
        if (size === 'S') return 'typography/label/large/bold';
      }
    }
    if (variant === 'underlined') {
      if (weight === 'regular') {
        if (size === 'L' || size === 'XL') return 'typography/body/medium/regular';
        if (size === 'M') return 'typography/body/small/regular';
        if (size === 'S') return 'typography/label/large/regular';
      }
      if (weight === 'bold') {
        if (size === 'L' || size === 'XL') return 'typography/body/medium/bold';
        if (size === 'M') return 'typography/body/small/bold';
        if (size === 'S') return 'typography/label/large/bold';
      }
    }
  })();

  function customizeIcon(icon: React.ReactNode) {
    if (!React.isValidElement(icon)) return icon;

    const iconSize = size === 'L' || size === 'XL' ? 24 : size === 'M' ? 20 : 16;

    const iconColor = (() => {
      if (variant === 'contained') {
        if (disabled) return 'color/gray/400';
        return 'color/white';
      }
      if (variant === 'outlined') {
        if (disabled) return 'color/gray/200';
        if (color === 'primary') return 'color/primary/600';
        return 'color/gray/800';
      }
      if (variant === 'text') {
        if (disabled) return 'color/gray/200';
        if (color === 'primary') return 'color/primary/600';
        if (color === 'gray') return 'color/gray/400';
        return 'color/gray/800';
      }
      if (variant === 'underlined') {
        if (disabled) return 'color/gray/200';
        if (color === 'primary') return 'color/primary/600';
        if (color === 'gray') return 'color/gray/400';
        return 'color/gray/800';
      }
    })();

    return React.cloneElement(icon as React.ReactElement<IconCommonPropsType>, { width: iconSize, height: iconSize, color: iconColor });
  }

  const customStartIcon = customizeIcon(startIcon);
  const customEndIcon = customizeIcon(endIcon);

  React.useEffect(() => {
    if (variant === 'contained') {
      if (size === 'XL') console.error('Design system Button props error: size - contained variant는 XL을 지원하지 않습니다 (fallback 처리로 L 사이즈가 적용되었습니다)');
      if (color === 'gray') console.error('Design system Button props error: color - contained variant는 gray를 지원하지 않습니다 (fallback 처리로 default가 적용되었습니다)');
      if (weight === 'bold') console.error('Design system Button props error: weight - contained variant는  bold를 지원하지 않습니다 (regular와 동일하게 처리됩니다)');
    }
    if (variant === 'outlined') {
      if (size === 'XL') console.error('Design system Button props error: size - outlined variant는 XL을 지원하지 않습니다 (fallback 처리로 L 사이즈가 적용되었습니다)');
      if (color === 'gray') console.error('Design system Button props error: color - outlined variant는 gray를 지원하지 않습니다 (fallback 처리로 default가 적용되었습니다)');
      if (weight === 'bold') console.error('Design system Button props error: weight - outlined variant는  bold를 지원하지 않습니다 (regular와 동일하게 처리됩니다)');
    }
    if (variant === 'underlined') {
      if (size === 'XL') console.error('Design system Button props error: size - underlined variant는 XL을 지원하지 않습니다 (fallback 처리로 L 사이즈가 적용되었습니다)');
    }
  }, [variant, size, color, weight]);

  return (
    <MUIButton startIcon={customStartIcon} endIcon={customEndIcon} {...rest}>
      <Typography variant={typoVariant}>{children}</Typography>
    </MUIButton>
  );
}

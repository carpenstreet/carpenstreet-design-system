import styled from 'styled-components';
import { BUTTON_TYPE, TButtonSize } from './Button.type';
import { TColor } from '@shared/settings/color.type';
import { getColor } from '@shared/util/util';

// 버튼 배경 색
const BUTTON_BACKGROUND: { [key in BUTTON_TYPE]: TColor } = {
  [BUTTON_TYPE.lightPrimaryFill]: 'color/violet/600',
  [BUTTON_TYPE.lightDefaultFill]: 'color/gray/800',
  [BUTTON_TYPE.lightPrimaryLine]: 'color/white',
  [BUTTON_TYPE.lightDefaultLine]: 'color/white',
  [BUTTON_TYPE.lightText]: 'color/white',
  [BUTTON_TYPE.lightPrimaryApplied]: 'color/violet/400',
  [BUTTON_TYPE.lightFillDisabled]: 'color/gray/200',
  [BUTTON_TYPE.lightLineDisabled]: 'color/white',
  [BUTTON_TYPE.lightTextDisabled]: 'color/white',
  [BUTTON_TYPE.darkPrimaryFill]: 'color/violet/600',
  [BUTTON_TYPE.darkDefaultFill]: 'color/gray/200',
  [BUTTON_TYPE.darkPrimaryLine]: 'color/violet/400',
  [BUTTON_TYPE.darkDefaultLine]: 'color/white',
  [BUTTON_TYPE.darkText]: 'color/white',
  [BUTTON_TYPE.darkPrimaryApplied]: 'color/violet/400',
  [BUTTON_TYPE.darkFillDisabled]: 'color/gray/400',
  [BUTTON_TYPE.darkLineDisabled]: 'color/white',
  [BUTTON_TYPE.darkTextDisabled]: 'color/white',
};

// 버튼 테두리 색
const BUTTON_BORDER_COLOR: { [key in BUTTON_TYPE]: TColor | null } = {
  [BUTTON_TYPE.lightPrimaryFill]: null,
  [BUTTON_TYPE.lightDefaultFill]: null,
  [BUTTON_TYPE.lightPrimaryLine]: 'color/violet/600',
  [BUTTON_TYPE.lightDefaultLine]: 'color/dim/400',
  [BUTTON_TYPE.lightText]: null,
  [BUTTON_TYPE.lightPrimaryApplied]: 'color/violet/400',
  [BUTTON_TYPE.lightFillDisabled]: null,
  [BUTTON_TYPE.lightLineDisabled]: 'color/gray/200',
  [BUTTON_TYPE.lightTextDisabled]: null,
  [BUTTON_TYPE.darkPrimaryFill]: null,
  [BUTTON_TYPE.darkDefaultFill]: null,
  [BUTTON_TYPE.darkPrimaryLine]: 'color/violet/400',
  [BUTTON_TYPE.darkDefaultLine]: 'color/dim/500',
  [BUTTON_TYPE.darkText]: null,
  [BUTTON_TYPE.darkPrimaryApplied]: 'color/violet/400',
  [BUTTON_TYPE.darkFillDisabled]: null,
  [BUTTON_TYPE.darkLineDisabled]: 'color/gray/600',
  [BUTTON_TYPE.darkTextDisabled]: null,
};

export const ButtonContainer = styled.button<{ buttonType: BUTTON_TYPE; size: TButtonSize; width: number | string }>(
  (props: { buttonType: BUTTON_TYPE; size: TButtonSize; width: number | string }) => {
    const backgroundColor = (() => {
      let color = getColor(BUTTON_BACKGROUND[props.buttonType]);
      if (props.buttonType === BUTTON_TYPE.lightDefaultLine) color = `${color}80`;
      if (props.buttonType === BUTTON_TYPE.lightPrimaryApplied) color = `${color}0A`;
      if (props.buttonType === BUTTON_TYPE.darkDefaultLine) color = `${color}73`;
      if (props.buttonType === BUTTON_TYPE.darkPrimaryApplied) color = `${color}3D`;
      return color;
    })();

    const borderColor = (() => {
      if (!BUTTON_BORDER_COLOR[props.buttonType]) return null;
      let color = getColor(BUTTON_BORDER_COLOR[props.buttonType]);
      if (props.buttonType === BUTTON_TYPE.lightDefaultLine) color = `${color}80`;
      if (props.buttonType === BUTTON_TYPE.darkDefaultLine) color = `${color}73`;
      return color;
    })();

    const paddingSize = (() => {
      if (props.size === 'L' && [BUTTON_TYPE.lightText, BUTTON_TYPE.darkText].includes(props.buttonType)) return '12px 11px';
      if (props.size === 'M' && [BUTTON_TYPE.lightText, BUTTON_TYPE.darkText].includes(props.buttonType)) return '10px 11px';
      if (props.size === 'S' && [BUTTON_TYPE.lightText, BUTTON_TYPE.darkText].includes(props.buttonType)) return '8px 10px';
      if (props.size === 'L') return '12px 22px';
      if (props.size === 'M') return '10px 22px';
      if (props.size === 'S') return '8px 16px';
    })();

    return {
      display: 'flex',
      borderRadius: '8px',
      padding: paddingSize,
      backgroundColor: backgroundColor,
      ...(props.width && { width: !Number.isNaN(Number(props.width)) ? `${props.width}px` : props.width }),
      ...(borderColor ? { border: `1px solid ${borderColor};` } : { border: 'none' }),
    };
  },
);

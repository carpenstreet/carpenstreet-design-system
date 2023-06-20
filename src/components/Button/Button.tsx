import React from 'react';
import { ButtonContainer } from './Button.styles';
import Letter from '@components/Letter/Letter';
import { TLetterVariant } from '@components/Letter/Letter.types';
import { TColor } from '@shared/settings/color.type';
import { BUTTON_TYPE, IButtonProps, TButtonColor } from './Button.type';

/* 
  [todo]: starticon, endicon, isLoading 의 경우 아이콘이 모두 정의되면 진행할 예정 
  icon의 경우 icon이름을 string으로 지정해주면 그에 맞는 아이콘을 불러올 수 있도록 구현할 예정 (크기는 size 마다 고정)
*/
/**
 * props를 설정하지 않을 경우 기본적으로 primary, filled, m 스타일로 적용됩니다.
 */
const Button = <Color extends TButtonColor>({
  on,
  color,
  style,
  size,
  activated = true,
  startIcon = false,
  endIcon = false,
  isLoading = false,
  width = null,
  buttonStyle,
  letterStyle,
  children,
}: IButtonProps<Color>) => {
  // 피그마 속성으로 타입 재정의
  const buttonType: BUTTON_TYPE = (() => {
    let type: BUTTON_TYPE;

    if (on === 'light' && activated) {
      if (color === 'primary' && style === 'filled') type = BUTTON_TYPE.lightPrimaryFill;
      if (color === 'default' && style === 'filled') type = BUTTON_TYPE.lightDefaultFill;
      if (color === 'primary' && style === 'outlined') type = BUTTON_TYPE.lightPrimaryLine;
      if (color === 'default' && style === 'default') type = BUTTON_TYPE.lightDefaultLine;
      if (color === 'default' && style === 'text') type = BUTTON_TYPE.lightText;
      if (color === 'default' && style === 'applied') type = BUTTON_TYPE.lightPrimaryApplied;
    }
    if (on === 'light' && !activated) {
      if (color === 'primary' && style === 'filled') type = BUTTON_TYPE.lightFillDisabled;
      if (color === 'default' && style === 'outlined') type = BUTTON_TYPE.lightLineDisabled;
      if (color === 'default' && style === 'text') type = BUTTON_TYPE.lightTextDisabled;
    }

    if (on === 'dark' && activated) {
      if (color === 'primary' && style === 'filled') type = BUTTON_TYPE.darkPrimaryFill;
      if (color === 'default' && style === 'filled') type = BUTTON_TYPE.darkDefaultFill;
      if (color === 'primary' && style === 'outlined') type = BUTTON_TYPE.darkPrimaryLine;
      if (color === 'default' && style === 'default') type = BUTTON_TYPE.darkDefaultLine;
      if (color === 'default' && style === 'text') type = BUTTON_TYPE.darkText;
      if (color === 'default' && style === 'applied') type = BUTTON_TYPE.darkPrimaryApplied;
    }
    if (on === 'dark' && !activated) {
      if (color === 'primary' && style === 'filled') type = BUTTON_TYPE.darkFillDisabled;
      if (color === 'default' && style === 'outlined') type = BUTTON_TYPE.darkLineDisabled;
      if (color === 'default' && style === 'text') type = BUTTON_TYPE.darkTextDisabled;
    }

    return type || BUTTON_TYPE.lightPrimaryFill;
  })();

  // 버튼 내부에 들어가는 텍스트 스타일
  const buttonLetterVariant: TLetterVariant = size === 'L' ? 'letter/en, ko/medium/bold' : 'letter/en, ko/small/bold';
  const buttonLetterColor: TColor = (() => {
    let letterColor: TColor = 'color/white';

    if ([BUTTON_TYPE.lightPrimaryLine].includes(buttonType)) letterColor = 'color/violet/600';
    if ([BUTTON_TYPE.lightDefaultLine, BUTTON_TYPE.lightText, BUTTON_TYPE.lightPrimaryApplied].includes(buttonType)) letterColor = 'color/gray/800';
    if ([BUTTON_TYPE.lightFillDisabled].includes(buttonType)) letterColor = 'color/gray/400';
    if ([BUTTON_TYPE.lightLineDisabled, BUTTON_TYPE.lightTextDisabled].includes(buttonType)) letterColor = 'color/gray/200';

    if ([BUTTON_TYPE.darkDefaultFill].includes(buttonType)) letterColor = 'color/black';
    if ([BUTTON_TYPE.darkPrimaryLine, BUTTON_TYPE.darkPrimaryApplied].includes(buttonType)) letterColor = 'color/violet/400';
    if ([BUTTON_TYPE.darkDefaultLine, BUTTON_TYPE.darkText].includes(buttonType)) letterColor = 'color/gray/100';
    if ([BUTTON_TYPE.darkFillDisabled, BUTTON_TYPE.darkLineDisabled, BUTTON_TYPE.darkTextDisabled].includes(buttonType)) letterColor = 'color/gray/600';

    return letterColor;
  })();

  return (
    <ButtonContainer buttonType={buttonType} size={size} width={width} buttonStyle={buttonStyle}>
      <Letter variant={buttonLetterVariant} color={buttonLetterColor} style={letterStyle}>
        {children}
      </Letter>
    </ButtonContainer>
  );
};

export default Button;

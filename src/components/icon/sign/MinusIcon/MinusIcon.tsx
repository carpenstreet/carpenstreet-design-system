import { IMinusIconProps } from './MinusIcon.types';

/**
 * 각종 UI 요소에 사용되는 '마이너스' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const MinusIcon = ({ size = 24 }: IMinusIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13Z" fill="#313135" />
    </svg>
  );
};

export default MinusIcon;

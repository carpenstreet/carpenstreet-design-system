import { ILightingsIconProps } from './LightingsIcon.types.ts';

/**
 * 카테고리 컴포넌트에서 쓰이는 '조명모음' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const LightingsIcon = ({ size = 16 }: ILightingsIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 9V6.5L4.33333 1H11.6667L14 6.5V9H12.5V12H11.5V9H8.5V14H12V15H4V14H7.5V9H2ZM13 8V6.70335L11.0046 2H4.99536L3 6.70335V8H13Z"
        fill="#313135"
      />
      <path d="M13 8V6.70335L11.0046 2H4.99536L3 6.70335V8H13Z" fill="#EEEEFF" />
    </svg>
  );
};

export default LightingsIcon;

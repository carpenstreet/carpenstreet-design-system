import { IExtraIconProps } from './ExtraIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '엑스트라' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const ExtraIcon = ({ size = 16 }: IExtraIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 12.5H8V11.5H11V12.5Z" fill="#EEEEFF" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 10.3431 4.34315 9 6 9H10C11.6569 9 13 10.3431 13 12V14H3V12ZM8 12.5H11V11.5H8V12.5Z" fill="#EEEEFF" />
      <path d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z" fill="#EEEEFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7ZM8 6C9.10457 6 10 5.10457 10 4C10 2.89543 9.10457 2 8 2C6.89543 2 6 2.89543 6 4C6 5.10457 6.89543 6 8 6Z"
        fill="#313135"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 8C3.79086 8 2 9.79086 2 12V15H14V12C14 9.79086 12.2091 8 10 8H6ZM6 9C4.34315 9 3 10.3431 3 12V14H13V12C13 10.3431 11.6569 9 10 9H6Z"
        fill="#313135"
      />
      <path d="M11 12.5H8V11.5H11V12.5Z" fill="#313135" />
    </svg>
  );
};

export default ExtraIcon;

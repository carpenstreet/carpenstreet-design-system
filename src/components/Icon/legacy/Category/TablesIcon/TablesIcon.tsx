import { ITablesIconProps } from './TablesIcon.types.ts';

/**
 * 카테고리 컴포넌트에서 쓰이는 '테이블모음' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const TablesIcon = ({ size = 16 }: ITablesIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1 4H2V8H4V15H5V8H11V15H12V8H14V4H15V1H1V4ZM14 2H2V3H14V2ZM3 7V4H7.5V7H3ZM8.5 7H13V4H8.5V7Z" fill="#313135" />
      <path d="M2 2H14V3H2V2Z" fill="#EEEEFF" />
      <path d="M3 4V7H7.5V4H3Z" fill="#EEEEFF" />
      <path d="M8.5 7H13V4H8.5V7Z" fill="#EEEEFF" />
    </svg>
  );
};

export default TablesIcon;

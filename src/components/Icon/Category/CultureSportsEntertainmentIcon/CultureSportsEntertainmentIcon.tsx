import { ICultureSportsEntertainmentIconProps } from './CultureSportsEntertainmentIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '문화체육엔터' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const CultureSportsEntertainmentIcon = ({ size = 16 }: ICultureSportsEntertainmentIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10L7 8V12L10 10Z" fill="#EEEEFF" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 6H3V14H13V6ZM10 10L7 8V12L10 10Z" fill="#EEEEFF" />
      <path d="M10 10L7 8.00002V12L10 10Z" fill="#313135" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 4.39913L13.6108 1.98758L13.3892 1.01245L2 3.6009V15H14V5.00002H3V4.39913ZM3 6.00002H13V14H3V6.00002Z" fill="#313135" />
    </svg>
  );
};

export default CultureSportsEntertainmentIcon;

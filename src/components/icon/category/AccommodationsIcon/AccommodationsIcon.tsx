import { IAccommodationsIconProps } from './AccommodationsIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '숙박시설' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const AccommodationsIcon = ({ size = 16 }: IAccommodationsIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 3V4H8V3H6Z" fill="#313135" />
      <path d="M9 3V4H11V3H9Z" fill="#313135" />
      <path d="M6 6V5H8V6H6Z" fill="#313135" />
      <path d="M9 5V6H11V5H9Z" fill="#313135" />
      <path d="M6 8V7H8V8H6Z" fill="#313135" />
      <path d="M6 9V10H8V9H6Z" fill="#313135" />
      <path d="M9 8V7H11V8H9Z" fill="#313135" />
      <path d="M9 9V10H11V9H9Z" fill="#313135" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 9V2H2V1H15V2H14V14H16V15H0V14H1V9H3ZM4 14V10H2V14H4ZM9.5 14H13V2H4V9H5V14H7.5V12H9.5V14Z" fill="#313135" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 14H9.5V12H7.5V14H5V9H4V2H13V14ZM6 3V4H8V3H6ZM9 3V4H11V3H9ZM6 6V5H8V6H6ZM9 5V6H11V5H9ZM6 8V7H8V8H6ZM6 9V10H8V9H6ZM9 8V7H11V8H9ZM9 9V10H11V9H9Z"
        fill="#EEEEFF"
      />
      <path d="M4 10V14H2V10H4Z" fill="#EEEEFF" />
    </svg>
  );
};

export default AccommodationsIcon;

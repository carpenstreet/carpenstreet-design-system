import { IPublicServiceEventsIconProps } from './PublicServiceEventsIcon.types.ts';

/**
 * 카테고리 컴포넌트에서 쓰이는 '공공서비스경조사' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const PublicServiceEventsIcon = ({ size = 16 }: IPublicServiceEventsIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 6.5V5H8.5V6.5H10V7.5H8.5V9H7.5V7.5H6V6.5H7.5Z" fill="#EEEEFF" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 14H10V11H6V14H3V2H9.99401L13 4.92249V14ZM7.5 6.5V5H8.5V6.5H10V7.5H8.5V9H7.5V7.5H6V6.5H7.5Z" fill="#EEEEFF" />
      <path d="M7.5 6.5V5H8.5V6.5H10V7.5H8.5V9H7.5V7.5H6V6.5H7.5Z" fill="#313135" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 14V4.5L10.4 1H2V14H1V15H7V12H9V15H15V14H14ZM6 11H10V14H13V4.92249L9.99401 2H3V14H6V11Z" fill="#313135" />
    </svg>
  );
};

export default PublicServiceEventsIcon;

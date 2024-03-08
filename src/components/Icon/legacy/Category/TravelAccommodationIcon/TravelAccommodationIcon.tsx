import { ITravelAccommodationIconProps } from './TravelAccommodationIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '여행숙박' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const TravelAccommodationIcon = ({ size = 16 }: ITravelAccommodationIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 1V2H6L4 3L1 6V8H7.5V12H4V14H2V15H5V13H11V15H14V14H12V12H8.5V8H15V6L12 3L10 2H8.5V1H7.5ZM5 5.90933V7H2V6.41421L4.59236 3.82185L6.05752 3.08927L5 5.90933ZM6 6.09067V7H10V6.09067L8.841 3H7.159L6 6.09067ZM11 7H14V6.41421L11.4076 3.82185L9.94248 3.08927L11 5.90933V7Z"
        fill="#313135"
      />
      <path d="M6 7V6.09067L7.159 3H8.841L10 6.09067V7H6Z" fill="white" />
      <path d="M14 7H11V5.90933L9.94248 3.08927L11.4076 3.82185L14 6.41421V7Z" fill="#EEEEFF" />
      <path d="M2 7H5V5.90933L6.05752 3.08927L4.59236 3.82185L2 6.41421V7Z" fill="#EEEEFF" />
      <rect x="5" y="13" width="6" height="2" fill="#EEEEFF" />
    </svg>
  );
};

export default TravelAccommodationIcon;

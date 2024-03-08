import { IResidenceIconProps } from './ResidenceIcon.types.ts';

/**
 * 카테고리 컴포넌트에서 쓰이는 '거주지' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const ResidenceIcon = ({ size = 16 }: IResidenceIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 6H7V9H9V6Z" fill="#EEEEFF" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 14H6V11H10V14H13V5.41421L9.58579 2H6.41421L3 5.41421V14ZM9 6H7V9H9V6Z" fill="#EEEEFF" />
      <path d="M9 6H7V9H9V6Z" fill="#313135" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 14V7H1V6L6 1H10L15 6V7H14V14H15V15H9V12H7V15H1V14H2ZM10 11H6V14H3V5.41421L6.41421 2H9.58579L13 5.41421V14H10V11Z"
        fill="#313135"
      />
    </svg>
  );
};

export default ResidenceIcon;

import { ISchoolEducationIconProps } from './SchoolEducationIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '학교교육' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const SchoolEducationIcon = ({ size = 16 }: ISchoolEducationIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5L7 1H9L15 5V11H14V6.66667L12.5 7.66667V13.309L9.11803 15H6.88197L3.5 13.309V7.66667L1 6V5ZM7.30278 9H8.69722L13.9472 5.5L8.69722 2H7.30278L2.05278 5.5L7.30278 9ZM9 10L11.5 8.33333V12.691L8.88197 14H7.11803L4.5 12.691V8.33333L7 10H9Z"
        fill="#313135"
      />
      <path d="M8.69718 9H7.30273L2.05273 5.5L7.30273 2H8.69718L13.9472 5.5L8.69718 9Z" fill="#EEEEFF" />
      <path d="M11.5 8.33333L8.99996 10H6.99996L4.49996 8.33333V12.691L7.11799 14H8.88192L11.5 12.691V8.33333Z" fill="#EEEEFF" />
    </svg>
  );
};

export default SchoolEducationIcon;

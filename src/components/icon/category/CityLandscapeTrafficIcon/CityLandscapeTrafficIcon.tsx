import { ICityLandscapeTrafficIconProps } from './CityLandscapeTrafficIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '도시경관교통' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const CityLandscapeTrafficIcon = ({ size = 16 }: ICityLandscapeTrafficIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6 5H3V9H1V15H15V1H6V5ZM11 14H14V2H7V8V14H10V5H11V14ZM2 10V14H6V6H4V10H2Z" fill="#313135" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2.5C4 3.32843 3.32843 4 2.5 4C1.67157 4 1 3.32843 1 2.5C1 1.67157 1.67157 1 2.5 1C3.32843 1 4 1.67157 4 2.5ZM3 2.5C3 2.77614 2.77614 3 2.5 3C2.22386 3 2 2.77614 2 2.5C2 2.22386 2.22386 2 2.5 2C2.77614 2 3 2.22386 3 2.5Z"
        fill="#313135"
      />
      <path d="M11 14H14V2H7V8V14H10V5H11V14Z" fill="#EEEEFF" />
      <path d="M2 14V10H4V6H6V14H2Z" fill="#EEEEFF" />
      <path d="M2.5 3C2.77614 3 3 2.77614 3 2.5C3 2.22386 2.77614 2 2.5 2C2.22386 2 2 2.22386 2 2.5C2 2.77614 2.22386 3 2.5 3Z" fill="#EEEEFF" />
    </svg>
  );
};

export default CityLandscapeTrafficIcon;

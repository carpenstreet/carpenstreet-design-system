import { ICafeRestaurantBarIconProps } from './CafeRestaurantBarIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '카페식당주점' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const CafeRestaurantBarIcon = ({ size = 16 }: ICafeRestaurantBarIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 1V2H5.73241L7.06574 4H1V6L7 11H7.5V14H4V15H12V14H8.5V11H9L15 6V4H8.26759L6.26759 1H1ZM7.36205 10L4.96205 8H11.0379L8.63795 10H7.36205ZM3.76205 7L2 5.53162V5H14V5.53162L12.238 7H3.76205Z"
        fill="#313135"
      />
      <path d="M2 5.53162L3.76205 7H12.238L14 5.53162V5H2V5.53162Z" fill="white" />
      <path d="M4.96205 8L7.36205 10H8.63795L11.0379 8H4.96205Z" fill="#EEEEFF" />
    </svg>
  );
};

export default CafeRestaurantBarIcon;

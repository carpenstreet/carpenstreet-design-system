import { ICarVehicleIconProps } from './CarVehicleIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '차량탈것' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const CarVehicleIcon = ({ size = 16 }: ICarVehicleIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6V5L4 1H12L14 5V6H16V7H15V13H14V15H12V13H4V15H2V13H1V7H0V6H2ZM3 6V5.23607L4.61803 2H11.382L13 5.23607V6H3ZM14 7H2V9H4V10H2V12H14V10H12V9H14V7Z"
        fill="#313135"
      />
      <path d="M3 5.23607V6H13V5.23607L11.382 2H4.61803L3 5.23607Z" fill="white" />
      <path d="M2 7V9H4V10H2V12H14V10H12V9H14V7H2Z" fill="#EEEEFF" />
    </svg>
  );
};

export default CarVehicleIcon;

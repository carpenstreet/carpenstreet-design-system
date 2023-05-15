import { ICalculateIconProps } from './CalculateIcon.types';

/**
 * 판매 가이드 페이지에서 쓰이는 '계산' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const CalculateIcon = ({ size = 24 }: ICalculateIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_133_3847)">
        <path d="M12.1875 23H1.5V1H19.5V11.625" stroke="#313135" strokeWidth="1.5" />
        <path d="M10.5 7L10.5 23" stroke="#313135" />
        <path d="M19.5 15L1.5 15" stroke="#313135" />
        <path d="M19.5 7L1.5 7" stroke="#313135" />
        <rect x="12.6001" y="13.1683" width="8.36693" height="2.5126" fill="#FF994F" stroke="#313135" />
        <rect x="14.542" y="15.6809" width="8.36693" height="2.5126" fill="#FF994F" stroke="#313135" />
        <rect x="13.6035" y="18.1936" width="8.36693" height="2.5126" fill="#FF994F" stroke="#313135" />
        <rect x="13.6035" y="20.7062" width="8.36693" height="2.5126" fill="#FF994F" stroke="#313135" />
        <path d="M6 9L6 13" stroke="#313135" />
        <path d="M8 11L4 11" stroke="#313135" />
        <path d="M17 11L13 11" stroke="#313135" />
        <path d="M7.41406 17.5858L4.58564 20.4142" stroke="#313135" />
        <path d="M7.41406 20.4143L4.58564 17.5859" stroke="#313135" />
      </g>
      <defs>
        <clipPath id="clip0_133_3847">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CalculateIcon;

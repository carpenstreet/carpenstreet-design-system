import { IPolicyIconProps } from './PolicyIcon.types';

/**
 * 판매 가이드 페이지에서 쓰이는 '정책' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const PolicyIcon = ({ size = 24 }: IPolicyIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_133_3845)">
        <path d="M12.0749 23H1.1001V1H19.1001V7.75" stroke="#313135" strokeWidth="1.5" />
        <line x1="4.1001" y1="4.3125" x2="16.1001" y2="4.3125" stroke="#313135" />
        <line x1="4.1001" y1="7.3125" x2="16.1001" y2="7.3125" stroke="#313135" />
        <line x1="4.1001" y1="10.3125" x2="10.1001" y2="10.3125" stroke="#313135" />
        <line x1="4.1001" y1="13.3125" x2="10.1001" y2="13.3125" stroke="#313135" />
        <line x1="4.1001" y1="16.3125" x2="10.1001" y2="16.3125" stroke="#313135" />
        <path
          d="M11.8438 15.3542V11.6728L17.3469 9.22699L22.8501 11.6728V15.3542C22.8501 18.8302 20.4792 22.0554 17.3469 22.917C14.2146 22.0554 11.8438 18.8302 11.8438 15.3542Z"
          fill="#FF994F"
          stroke="#313135"
          strokeWidth="1.5"
        />
        <path d="M14.6772 15.9191L16.6693 17.9107L20.6529 13.9272" stroke="#313135" />
      </g>
      <defs>
        <clipPath id="clip0_133_3845">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PolicyIcon;

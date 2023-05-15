import { IPersonalIconProps } from './PersonalIcon.types';

/**
 * '개인 사용권' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const PersonalIcon = ({ size = 24 }: IPersonalIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#FFD1F6" />
      <rect x="8.5" y="4.61841" width="7" height="7" rx="3.5" fill="white" stroke="#313135" strokeLinejoin="round" />
      <path
        d="M4.5164 18.6184C4.7737 14.7094 8.02588 11.6184 12 11.6184C15.9741 11.6184 19.2263 14.7094 19.4836 18.6184H4.5164Z"
        fill="white"
        stroke="#313135"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PersonalIcon;

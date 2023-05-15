import { ISharingIconProps } from './SharingIcon.types';

/**
 * '공동 사용권' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const SharingIcon = ({ size = 24 }: ISharingIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#C4E9F9" />
      <rect x="6.06098" y="5.64619" width="4.01111" height="4.01111" rx="2.00556" fill="white" stroke="#313135" strokeWidth="1.05556" strokeLinejoin="round" />
      <path
        d="M3.55813 14.0906C3.81962 11.8325 5.73843 10.0795 8.06667 10.0795C10.3949 10.0795 12.3137 11.8325 12.5752 14.0906H3.55813Z"
        fill="white"
        stroke="#313135"
        strokeWidth="1.05556"
        strokeLinejoin="round"
      />
      <rect x="14.9277" y="5.64619" width="4.01111" height="4.01111" rx="2.00556" fill="white" stroke="#313135" strokeWidth="1.05556" strokeLinejoin="round" />
      <path
        d="M12.4248 14.0906C12.6863 11.8325 14.6051 10.0795 16.9334 10.0795C19.2616 10.0795 21.1804 11.8325 21.4419 14.0906H12.4248Z"
        fill="white"
        stroke="#313135"
        strokeWidth="1.05556"
        strokeLinejoin="round"
      />
      <rect x="10.4946" y="9.14619" width="4.01111" height="4.01111" rx="2.00556" fill="white" stroke="#313135" strokeWidth="1.05556" strokeLinejoin="round" />
      <path
        d="M7.99173 17.5906C8.25322 15.3325 10.172 13.5795 12.5003 13.5795C14.8285 13.5795 16.7473 15.3325 17.0088 17.5906H7.99173Z"
        fill="white"
        stroke="#313135"
        strokeWidth="1.05556"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SharingIcon;

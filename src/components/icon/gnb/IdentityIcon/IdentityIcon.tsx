import { IIdentityIconProps } from './IdentityIcon.types';

/**
 * Gnb에서 쓰이는 '유저홈(Identity)' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const IdentityIcon = ({ size = 24 }: IIdentityIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2235_13899)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5ZM8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7Z"
          fill="#313135"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.14304 19H18.857C18.5954 18.0961 17.9807 17.2503 17.0569 16.5574C15.7983 15.6134 14.0137 15 12 15C9.98631 15 8.20174 15.6134 6.94315 16.5574C6.01929 17.2503 5.40455 18.0961 5.14304 19ZM5.74315 14.9574C7.37998 13.7297 9.59541 13 12 13C14.4046 13 16.62 13.7297 18.2569 14.9574C19.894 16.1852 21 17.9578 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20C3 17.9578 4.10601 16.1852 5.74315 14.9574Z"
          fill="#313135"
        />
      </g>
      <defs>
        <clipPath id="clip0_2235_13899">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IdentityIcon;

import { ICouponIconProps } from './CouponIcon.types';

/**
 * 각종 UI 요소에 사용되는 '쿠폰' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const CouponIcon = ({ size = 24 }: ICouponIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.75 12C18.75 11.39 18.9871 10.8051 19.409 10.3738C19.831 9.94246 20.4033 9.70016 21 9.70016V6.39991C21 6.09494 20.8815 5.80245 20.6705 5.5868C20.4595 5.37115 20.1734 5.25 19.875 5.25H4.125C3.82663 5.25 3.5405 5.37115 3.32952 5.5868C3.11854 5.80245 3 6.09494 3 6.39991V9.70016C3.59674 9.70016 4.16904 9.94246 4.59099 10.3738C5.01295 10.8051 5.25 11.39 5.25 12C5.25 12.6099 5.01295 13.1949 4.59099 13.6262C4.16904 14.0575 3.59674 14.2998 3 14.2998V17.6001C3 17.9051 3.11854 18.1975 3.32952 18.4132C3.5405 18.6288 3.82663 18.75 4.125 18.75H19.875C20.1734 18.75 20.4595 18.6288 20.6705 18.4132C20.8815 18.1975 21 17.9051 21 17.6001V14.2998C20.4033 14.2998 19.831 14.0575 19.409 13.6262C18.9871 13.1949 18.75 12.6099 18.75 12Z"
        stroke="#313135"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path d="M15.1838 8.81616L8.81641 15.1836" stroke="#313135" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.75" cy="9.75" r="1.125" fill="#313135" />
      <circle cx="14.25" cy="14.25" r="1.125" fill="#313135" />
    </svg>
  );
};

export default CouponIcon;

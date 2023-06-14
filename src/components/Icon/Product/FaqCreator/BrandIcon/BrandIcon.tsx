import { IBrandIconProps } from './BrandIcon.types';

/**
 * 판매 가이드 페이지에서 쓰이는 '브랜드' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const BrandIcon = ({ size = 24 }: IBrandIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_133_3850)">
        <path d="M24.0002 9.59995L24.0002 -4.75089e-05L14.4002 -4.81832e-05L0.00019543 14.4L9.6002 24L24.0002 9.59995Z" fill="white" />
        <path d="M23.2502 0.749953L23.2502 9.28929L9.6002 22.9393L1.06086 14.4L14.7109 0.749952L23.2502 0.749953Z" stroke="#313135" strokeWidth="1.5" />
        <circle cx="19.0718" cy="4.92816" r="1.09601" transform="rotate(45 19.0718 4.92816)" fill="#313135" />
        <path d="M2.11339 14.3915L5.64893 10.856L13.1443 18.3513L9.60872 21.8868L2.11339 14.3915Z" fill="#FF994F" />
        <line x1="6.00248" y1="10.5024" x2="13.4978" y2="17.9977" stroke="#313135" />
      </g>
      <defs>
        <clipPath id="clip0_133_3850">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BrandIcon;

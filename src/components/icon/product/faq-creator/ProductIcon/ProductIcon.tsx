import { IProductIconProps } from './ProductIcon.types';

/**
 * 판매 가이드 페이지에서 쓰이는 '프로덕트' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const ProductIcon = ({ size = 24 }: IProductIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_133_3849)">
        <path
          d="M6.50049 10.4301V4.15397L12.0009 1.01758L17.4997 4.15397V10.4301L12.0009 13.5681L6.50049 10.4301Z"
          fill="white"
          stroke="#313135"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path d="M11.999 7.29199V13.5681" stroke="#313135" strokeMiterlimit="10" />
        <path d="M6.50049 4.15564L11.9992 7.29203" stroke="#313135" strokeMiterlimit="10" />
        <path d="M11.999 7.29203L17.4994 4.15564" stroke="#313135" strokeMiterlimit="10" />
        <path d="M1 19.8442V13.5681L6.50043 10.4301L12.0009 13.5681V19.8442L6.50043 22.9823L1 19.8442Z" fill="white" stroke="#313135" strokeWidth="1.5" strokeMiterlimit="10" />
        <path d="M6.50049 16.7062V22.9823" stroke="#313135" strokeMiterlimit="10" />
        <path d="M1 13.5681L6.50043 16.7062" stroke="#313135" strokeMiterlimit="10" />
        <path d="M6.50049 16.7062L11.9992 13.5681" stroke="#313135" strokeMiterlimit="10" />
        <path
          d="M12.001 19.8442V13.5681L17.4997 10.4301L23.0001 13.5681V19.8442L17.4997 22.9823L12.001 19.8442Z"
          fill="#FF994F"
          stroke="#313135"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path d="M17.4995 16.7062V22.9823" stroke="#313135" strokeMiterlimit="10" />
        <path d="M11.999 13.5681L17.4994 16.7062" stroke="#313135" strokeMiterlimit="10" />
        <path d="M17.4995 16.7062L22.9999 13.5681" stroke="#313135" strokeMiterlimit="10" />
      </g>
      <defs>
        <clipPath id="clip0_133_3849">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ProductIcon;

import { IReviewCountIconProps } from './ReviewCountIcon.types';

/**
 * 상품 관련 페이지에서 쓰이는 '리뷰 카운트' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const ReviewCountIcon = ({ size = 12 }: IReviewCountIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_143_3872" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 2C2.44772 2 2 2.44772 2 3V7C2 7.55228 2.44772 8 3 8H4.33333L6 10.5L7.66667 8H9C9.55228 8 10 7.55228 10 7V3C10 2.44772 9.55228 2 9 2H3Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2C2.44772 2 2 2.44772 2 3V7C2 7.55228 2.44772 8 3 8H4.33333L6 10.5L7.66667 8H9C9.55228 8 10 7.55228 10 7V3C10 2.44772 9.55228 2 9 2H3Z"
        fill="#E6E6FF"
      />
      <path
        d="M4.33333 8L4.83256 7.66718L4.65444 7.4H4.33333V8ZM6 10.5L5.50077 10.8328L6 11.5817L6.49923 10.8328L6 10.5ZM7.66667 8V7.4H7.34556L7.16744 7.66718L7.66667 8ZM2.6 3C2.6 2.77909 2.77909 2.6 3 2.6V1.4C2.11634 1.4 1.4 2.11634 1.4 3H2.6ZM2.6 7V3H1.4V7H2.6ZM3 7.4C2.77909 7.4 2.6 7.22091 2.6 7H1.4C1.4 7.88366 2.11634 8.6 3 8.6V7.4ZM4.33333 7.4H3V8.6H4.33333V7.4ZM3.8341 8.33282L5.50077 10.8328L6.49923 10.1672L4.83256 7.66718L3.8341 8.33282ZM6.49923 10.8328L8.1659 8.33282L7.16744 7.66718L5.50077 10.1672L6.49923 10.8328ZM9 7.4H7.66667V8.6H9V7.4ZM9.4 7C9.4 7.22091 9.22091 7.4 9 7.4V8.6C9.88366 8.6 10.6 7.88366 10.6 7H9.4ZM9.4 3V7H10.6V3H9.4ZM9 2.6C9.22091 2.6 9.4 2.77909 9.4 3H10.6C10.6 2.11634 9.88366 1.4 9 1.4V2.6ZM3 2.6H9V1.4H3V2.6Z"
        fill="#CECEFF"
        mask="url(#path-1-inside-1_143_3872)"
      />
    </svg>
  );
};

export default ReviewCountIcon;

import { IImageIconProps } from './ImageIcon.types';

/**
 * 상품 관련 페이지에서 쓰이는 '이미지' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const ImageIcon = ({ size = 12 }: IImageIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.25" y="0.25" width="11.5" height="11.5" rx="1.75" fill="#E6E6FF" />
      <path d="M10.5 8L9 9L4.5 5.5L0 9V10C0 11.1046 0.895431 12 2 12H10C11.1046 12 12 11.1046 12 10V9L10.5 8Z" fill="#6A6AFF" />
      <circle cx="8.5" cy="3.5" r="1.5" fill="#6A6AFF" />
      <rect x="0.25" y="0.25" width="11.5" height="11.5" rx="1.75" stroke="#6A6AFF" strokeWidth="0.5" />
    </svg>
  );
};

export default ImageIcon;

import { ILoadingIconProps } from './LoadingIcon.types';

/**
 * 상품 관련 페이지에서 사용하는 '로딩' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const LoadingIcon = ({ size = 24 }: ILoadingIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.5 12C21.5 13.78 20.9722 15.5201 19.9832 17.0001C18.9943 18.4802 17.5887 19.6337 15.9442 20.3149C14.2996 20.9961 12.49 21.1743 10.7442 20.8271C8.99836 20.4798 7.39471 19.6226 6.13604 18.364C4.87737 17.1053 4.0202 15.5016 3.67293 13.7558C3.32567 12.01 3.5039 10.2004 4.18508 8.55585C4.86627 6.91131 6.01983 5.50571 7.49987 4.51677C8.97991 3.52784 10.72 3 12.5 3"
        stroke="#2A282D"
        strokeWidth="2.4"
      />
    </svg>
  );
};

export default LoadingIcon;

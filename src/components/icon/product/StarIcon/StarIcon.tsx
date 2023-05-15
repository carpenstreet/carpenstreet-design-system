import { IStarIconProps } from './StarIcon.types';

/**
 * 상품 관련 페이지에서 쓰이는 '별' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const StarIcon = ({ size = 24 }: IStarIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L15.2756 8.86417L22 10.0937L17.3 14.9474L18.1803 21.5714L12 18.707L5.81966 21.5714L6.7 14.9474L2 10.0937L8.72442 8.86417L12 3Z" fill="#313135" />
    </svg>
  );
};

export default StarIcon;

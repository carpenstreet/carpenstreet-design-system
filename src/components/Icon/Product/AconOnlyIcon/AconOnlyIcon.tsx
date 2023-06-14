import { IAconOnlyIconProps } from './AconOnlyIcon.types';

/**
 * 상품 관련 페이지에서 쓰이는 '독점(Acon Only)' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const AconOnlyIcon = ({ size = 12 }: IAconOnlyIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="6" r="6" fill="#4E4EFF" />
      <path d="M5.99982 2.18176L6.91778 5.08199L9.818 5.99994L6.91778 6.9179L5.99982 9.81813L5.08187 6.9179L2.18164 5.99994L5.08187 5.08199L5.99982 2.18176Z" fill="white" />
    </svg>
  );
};

export default AconOnlyIcon;

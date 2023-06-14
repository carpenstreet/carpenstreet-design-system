import { IMoreIconProps } from './MoreIcon.types';

/**
 * 각종 UI 요소에 사용되는 '더보기' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const MoreIcon = ({ size = 24 }: IMoreIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z" fill="#313135" />
      <path d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z" fill="#313135" />
      <path d="M14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19Z" fill="#313135" />
    </svg>
  );
};

export default MoreIcon;

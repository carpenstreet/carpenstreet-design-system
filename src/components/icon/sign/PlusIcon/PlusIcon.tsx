import { IPlusIconProps } from './PlusIcon.types';

/**
 * 각종 UI 요소에 사용되는 '플러스/더하기' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const PlusIcon = ({ size = 24 }: IPlusIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 11H13V5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11Z"
        fill="#313135"
      />
    </svg>
  );
};

export default PlusIcon;

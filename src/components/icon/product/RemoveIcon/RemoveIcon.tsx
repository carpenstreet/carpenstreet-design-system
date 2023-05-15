import { IRemoveIconProps } from './RemoveIcon.types';

/**
 * 상품 관련 페이지에서 쓰이는 '삭제' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const RemoveIcon = ({ size = 16 }: IRemoveIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.00016 1.33337C4.3135 1.33337 1.3335 4.31337 1.3335 8.00004C1.3335 11.6867 4.3135 14.6667 8.00016 14.6667C11.6868 14.6667 14.6668 11.6867 14.6668 8.00004C14.6668 4.31337 11.6868 1.33337 8.00016 1.33337ZM11.3335 10.3934L10.3935 11.3334L8.00016 8.94004L5.60683 11.3334L4.66683 10.3934L7.06016 8.00004L4.66683 5.60671L5.60683 4.66671L8.00016 7.06004L10.3935 4.66671L11.3335 5.60671L8.94016 8.00004L11.3335 10.3934Z"
        fill="#4E4EFF"
        fillOpacity="0.3"
      />
    </svg>
  );
};

export default RemoveIcon;

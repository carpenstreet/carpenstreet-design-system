import { IPointIconProps } from './PointIcon.types';

/**
 * 각종 UI 요소에 사용되는 '포인트' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const PointIcon = ({ size = 24 }: IPointIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill="#313135"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7H13C14.6569 7 16 8.34315 16 10C16 11.6569 14.6569 13 13 13H10V16C10 16.5523 9.55228 17 9 17C8.44772 17 8 16.5523 8 16V12V8C8 7.44772 8.44772 7 9 7ZM10 11H13C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9H10V11Z"
        fill="#313135"
      />
    </svg>
  );
};

export default PointIcon;

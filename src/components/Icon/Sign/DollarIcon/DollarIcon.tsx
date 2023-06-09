import { IDollarIconProps } from './DollarIcon.types';

/**
 * 각종 UI 요소에 사용되는 '달러화' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const DollarIcon = ({ size = 24 }: IDollarIconProps) => {
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
        d="M12 6C12.5523 6 13 6.44772 13 7V8H15C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10H10.5C10.2239 10 10 10.2239 10 10.5C10 10.7761 10.2239 11 10.5 11L13.5 11C14.8807 11 16 12.1193 16 13.5C16 14.8807 14.8807 16 13.5 16H13V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V16L9 16C8.44772 16 8 15.5523 8 15C8 14.4477 8.44772 14 9 14L13.5 14C13.7761 14 14 13.7761 14 13.5C14 13.2239 13.7761 13 13.5 13L10.5 13C9.11929 13 8 11.8807 8 10.5C8 9.11929 9.11929 8 10.5 8H11V7C11 6.44772 11.4477 6 12 6Z"
        fill="#313135"
      />
    </svg>
  );
};

export default DollarIcon;

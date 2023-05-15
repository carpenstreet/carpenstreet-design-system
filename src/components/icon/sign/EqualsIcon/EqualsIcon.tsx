import { IEqualsIconProps } from './EqualsIcon.types';

/**
 * 각종 UI 요소에 사용되는 '등호' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const EqualsIcon = ({ size = 24 }: IEqualsIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 9.99023H5C4.44772 9.99023 4 9.54252 4 8.99023C4 8.43795 4.44772 7.99023 5 7.99023H19C19.5523 7.99023 20 8.43795 20 8.99023C20 9.54252 19.5523 9.99023 19 9.99023Z"
        fill="#313135"
      />
      <path
        d="M19 15.9802H5C4.44772 15.9802 4 15.5325 4 14.9802C4 14.4279 4.44772 13.9802 5 13.9802H19C19.5523 13.9802 20 14.4279 20 14.9802C20 15.5325 19.5523 15.9802 19 15.9802Z"
        fill="#313135"
      />
    </svg>
  );
};

export default EqualsIcon;

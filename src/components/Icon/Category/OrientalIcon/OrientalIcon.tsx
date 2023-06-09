import { IOrientalIconProps } from './OrientalIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '동양사극무협' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const OrientalIcon = ({ size = 16 }: IOrientalIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 1.81504V1H5.5V1.5H10.5V1H11.5V1.81504L14.23 5H15V6H12.9343L14.2676 8H15V9H14.1429L15 15H9V12.5C9 11.9477 8.55228 11.5 8 11.5C7.44772 11.5 7 11.9477 7 12.5V15H1L1.85714 9H1V8H1.73241L3.06574 6H1V5H1.77003L4.5 1.81504ZM2.93426 8H13.0657L11.7324 6H4.26759L2.93426 8ZM2.8673 9L2.15301 14H6V12.5C6 11.3954 6.89543 10.5 8 10.5C9.10457 10.5 10 11.3954 10 12.5V14H13.847L13.1327 9H2.8673ZM12.9129 5H3.08711L5.22997 2.5H10.77L12.9129 5Z"
        fill="#313135"
      />
      <path
        d="M2.86712 9L2.15283 14H5.99982V12.5C5.99982 11.3954 6.89525 10.5 7.99982 10.5C9.10439 10.5 9.99982 11.3954 9.99982 12.5V14H13.8468L13.1325 9H2.86712Z"
        fill="#EEEEFF"
      />
      <path d="M13.0656 8H2.93408L4.26741 6H11.7322L13.0656 8Z" fill="#EEEEFF" />
      <path d="M5.22979 2.5L3.08693 5H12.9127L10.7699 2.5H5.22979Z" fill="#EEEEFF" />
    </svg>
  );
};

export default OrientalIcon;

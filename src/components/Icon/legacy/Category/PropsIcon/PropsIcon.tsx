import { IPropsIconProps } from './PropsIcon.types.ts';

/**
 * 카테고리 컴포넌트에서 쓰이는 '소품모음' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const PropsIcon = ({ size = 16 }: IPropsIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 2.03095C10.1391 2.23534 11.4703 3.43151 11.874 5H15V11L13 12.3333V13L12 15H4L3 13V10L1 7V5H4.12602C4.52972 3.43151 5.86086 2.23534 7.5 2.03095V1H8.5V2.03095ZM8 3C9.30622 3 10.4175 3.83481 10.8293 5H5.17071C5.58254 3.83481 6.69378 3 8 3ZM2 6H3V8.19722L2 6.69722V6ZM11.382 14L12 12.7639V6H4V12.7639L4.61803 14H11.382ZM14 10.4648L13 11.1315V6H14V10.4648Z"
        fill="#313135"
      />
      <path d="M12 12.7639L11.382 14H4.61803L4 12.7639V6H12V12.7639Z" fill="#EEEEFF" />
      <path d="M10.8293 5C10.4175 3.83481 9.30622 3 8 3C6.69378 3 5.58254 3.83481 5.17071 5H10.8293Z" fill="#EEEEFF" />
      <path d="M3 6H2V6.69722L3 8.19722V6Z" fill="#EEEEFF" />
    </svg>
  );
};

export default PropsIcon;

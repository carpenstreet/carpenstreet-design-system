import { INoirCrimeRichIconProps } from './NoirCrimeRichIcon.types.ts';

/**
 * 카테고리 컴포넌트에서 쓰이는 '도시경관교통' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const NoirCrimeRichIcon = ({ size = 16 }: INoirCrimeRichIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3741 0.445557L13.8881 6.36099H15.9999V7.36099H13.5122L3.51218 7.85245H0V6.85245H3.08466L4.0749 1.55212L12.3741 0.445557ZM4.10766 6.82197L12.8637 6.39166L11.6256 1.55421L4.9249 2.44764L4.10766 6.82197Z"
        fill="#313135"
      />
      <path d="M4 11.9999L1 8.99988L8 9.49988L6.5 11.9999H4Z" fill="#313135" />
      <path d="M8 9.49988L15 8.99988L12 11.9999H9.5L8 9.49988Z" fill="#313135" />
      <path d="M10.5 15.9999V14.9999H5.5V15.9999H10.5Z" fill="#313135" />
      <path d="M12.8634 6.39165L4.10742 6.82197L4.92466 2.44763L11.6254 1.5542L12.8634 6.39165Z" fill="#EEEEFF" />
    </svg>
  );
};

export default NoirCrimeRichIcon;

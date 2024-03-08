import { ISFApocalypseIconProps } from './SFApocalypseIcon.types.ts';

/**
 * 카테고리 컴포넌트에서 쓰이는 'SF아포칼립스' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const SFApocalypseIcon = ({ size = 16 }: ISFApocalypseIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.5 9.49988C6.5 10.3283 7.17157 10.9999 8 10.9999C8.82843 10.9999 9.5 10.3283 9.5 9.49988C9.5 8.67145 8.82843 7.99988 8 7.99988C7.17157 7.99988 6.5 8.67145 6.5 9.49988Z"
        fill="#EEEEFF"
      />
      <path d="M8 1.54297L10 3.8934V3.99988H6V3.8934L8 1.54297Z" fill="#EEEEFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 13.9999H15V13.3756L11.6045 9.49507L10.256 4.99988H5.74403L4.39547 9.49507L1 13.3756V13.9999H4V10.9999H5V13.9999H11V10.9999H12V13.9999ZM6.5 9.49988C6.5 10.3283 7.17157 10.9999 8 10.9999C8.82843 10.9999 9.5 10.3283 9.5 9.49988C9.5 8.67145 8.82843 7.99988 8 7.99988C7.17157 7.99988 6.5 8.67145 6.5 9.49988Z"
        fill="#EEEEFF"
      />
      <path d="M6.5 9.5C6.5 10.3284 7.17157 11 8 11C8.82843 11 9.5 10.3284 9.5 9.5C9.5 8.67157 8.82843 8 8 8C7.17157 8 6.5 8.67157 6.5 9.5Z" fill="#313135" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3.52564V4L3.5 9L0 13V15H16V13L12.5 9L11 4V3.52564L8 0L5 3.52564ZM10 3.89352L8 1.54309L6 3.89352V4H10V3.89352ZM12 14H15V13.3757L11.6045 9.4952L10.256 5H5.74403L4.39547 9.4952L1 13.3757V14H4V11H5V14H11V11H12V14Z"
        fill="#313135"
      />
    </svg>
  );
};

export default SFApocalypseIcon;

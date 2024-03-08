import { ISourceFileIconProps } from './SourceFileIcon.types.ts';

/**
 * 카테고리 컴포넌트에서 쓰이는 '소스파일' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const SourceFileIcon = ({ size = 16 }: ISourceFileIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 4C11 4.55228 10.5523 5 10 5C9.44771 5 9 4.55228 9 4C9 3.44772 9.44771 3 10 3C10.5523 3 11 3.44772 11 4Z" fill="#EEEEFF" />
      <path d="M2 9V14H13.9113V9H2Z" fill="#EEEEFF" />
      <path d="M2 8H7.69829L6.03162 6H2V8Z" fill="#EEEEFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2H12V8H9L6.5 5H4V2ZM11 4C11 4.55228 10.5523 5 10 5C9.44771 5 9 4.55228 9 4C9 3.44772 9.44771 3 10 3C10.5523 3 11 3.44772 11 4Z"
        fill="#EEEEFF"
      />
      <path d="M11 4C11 4.55228 10.5523 5 10 5C9.44771 5 9 4.55228 9 4C9 3.44772 9.44771 3 10 3C10.5523 3 11 3.44772 11 4Z" fill="#313135" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 1V5H1V15H14.9113V8H13V1H3ZM12 2H4V5H6.5L9 8H12V2ZM2 9V14H13.9113V9H2ZM2 8H7.69829L6.03162 6H2V8Z" fill="#313135" />
    </svg>
  );
};

export default SourceFileIcon;

import { IChairsIconProps } from './ChairsIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '의자모음' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const ChairsIcon = ({ size = 16 }: IChairsIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 1C2.89543 1 2 1.89543 2 3C2 4.10457 2.89543 5 4 5H4.79809L2 13.9234V15H3V14.0766L4.43505 9.5H7.47888V15H8.47888V9.5H11.5443L13 14.0776V15H14V13.9224L11.1626 5H12C13.1046 5 14 4.10457 14 3C14 1.89543 13.1046 1 12 1H4ZM12 2H4C3.44772 2 3 2.44772 3 3C3 3.55228 3.44772 4 4 4H12C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2ZM11.2263 8.5L10.1132 5H8.47888V8.5H11.2263ZM7.47888 8.5V5H5.8461L4.74862 8.5H7.47888Z"
        fill="#313135"
      />
      <path d="M4 2H12C12.5523 2 13 2.44772 13 3C13 3.55228 12.5523 4 12 4H4C3.44772 4 3 3.55228 3 3C3 2.44772 3.44772 2 4 2Z" fill="#EEEEFF" />
    </svg>
  );
};

export default ChairsIcon;

import { ICaretIconProps } from './CaretIcon.types';

/**
 * 드랍다운 등에서 방향을 표시할 때 쓰이는'캐럿(Caret)' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @param direction 셰브론의 방향을 결정합니다. (down, up)
 * @constructor
 */
const CaretIcon = ({ size = 24, direction }: ICaretIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {direction === 'down' ? (
        <path
          d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"
          fill="#313135"
        />
      ) : (
        <path
          d="M15.2899 12.29L12.6999 9.7C12.3099 9.31 11.6799 9.31 11.2899 9.7L8.69995 12.29C8.06995 12.92 8.51995 14 9.40995 14L14.5899 14C15.4799 14 15.9199 12.92 15.2899 12.29Z"
          fill="#313135"
        />
      )}
    </svg>
  );
};

export default CaretIcon;

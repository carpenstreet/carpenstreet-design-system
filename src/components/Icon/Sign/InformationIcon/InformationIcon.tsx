import { IInformationIconProps } from './InformationIcon.types';

/**
 * 각종 UI에 사용되는 '정보' 아이콘입니다.
 * @param size width와 height를 결정 (width = height)
 * @param isFilled Filled, Outlined를 결정
 * @constructor
 */
const InformationIcon = ({ size = 24, isFilled }: IInformationIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {isFilled ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16L13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16ZM12 7C11.4477 7 11 7.44771 11 8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8C13 7.44771 12.5523 7 12 7Z"
          fill="#313135"
        />
      ) : (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            fill="#313135"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 17C11.4477 17 11 16.5523 11 16L11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11L13 16C13 16.5523 12.5523 17 12 17ZM11 8C11 7.44771 11.4477 7 12 7C12.5523 7 13 7.44771 13 8C13 8.55229 12.5523 9 12 9C11.4477 9 11 8.55229 11 8Z"
            fill="#313135"
          />
        </>
      )}
    </svg>
  );
};

export default InformationIcon;

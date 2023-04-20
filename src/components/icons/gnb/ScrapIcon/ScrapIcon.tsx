import { IScrapIconProps } from './ScrapIcon.types';

/**
 *Gnb에서 쓰이는 '스크랩'아이콘입니다.
 * @param isFilled filled 여부를 결정합니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const ScrapIcon = ({ isFilled, size = 24 }: IScrapIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2235_13900)">
        {isFilled ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 3C5.44772 3 5 3.44772 5 4V20C5 20.3617 5.19535 20.6953 5.51084 20.8722C5.82634 21.0491 6.2128 21.0419 6.52145 20.8533L12 17.5053L17.4785 20.8533C17.7872 21.0419 18.1737 21.0491 18.4892 20.8722C18.8047 20.6953 19 20.3617 19 20V4C19 3.44772 18.5523 3 18 3H6Z"
            fill="#313135"
          />
        ) : (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V20C19 20.3617 18.8047 20.6953 18.4892 20.8722C18.1737 21.0491 17.7872 21.0419 17.4785 20.8533L12 17.5053L6.52145 20.8533C6.2128 21.0419 5.82634 21.0491 5.51084 20.8722C5.19535 20.6953 5 20.3617 5 20V4ZM7 5V18.2169L11.4785 15.4801C11.7987 15.2844 12.2013 15.2844 12.5215 15.4801L17 18.2169V5H7Z"
            fill="#313135"
          />
        )}
      </g>
      <defs>
        <clipPath id="clip0_2235_13900">
          <rect width={size} height={size} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ScrapIcon;

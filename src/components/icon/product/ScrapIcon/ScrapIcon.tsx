import { IScrapIconProps } from './ScrapIcon.types';

/**
 * Element/Icon/Product/ScrapIcon
 *
 * 상품 관련 페이지에서 쓰이는 '스크랩' 아이콘입니다.
 *
 * 네이밍 관련하여 PD님과 협의가 필요합니다
 * @param size
 * @param type
 * @constructor
 */
const ScrapIcon = ({ size = 24, type }: IScrapIconProps) => {
  return type === 1 ? (
    <svg width={2.5 * size} height={2.5 * size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2235_15043)">
        <path
          d="M30.2508 35.1022C30.0957 35.0123 29.9043 35.0123 29.7492 35.1022L24.4643 38.1659C23.1377 38.9349 21.5 37.9927 21.5 36.5584V24.1096C21.5 22.6499 22.7262 21.4396 24.2727 21.4396H35.7273C37.2738 21.4396 38.5 22.6499 38.5 24.1096V36.5584C38.5 37.9927 36.8623 38.9349 35.5357 38.1659L30.2508 35.1022Z"
          fill="#4E4EFF"
          stroke="#3E3ECD"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter id="filter0_d_2235_15043" x="-2.57143" y="-2.57143" width="65.1429" height="65.1429" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="10.2857" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2235_15043" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2235_15043" result="shape" />
        </filter>
      </defs>
    </svg>
  ) : type === 2 ? (
    <svg width={2.5 * size} height={2.5 * size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2235_15041)">
        <path
          d="M30.2508 35.1626C30.0957 35.0727 29.9043 35.0727 29.7492 35.1626L24.4643 38.2263C23.1377 38.9953 21.5 38.0531 21.5 36.6188V24.17C21.5 22.7103 22.7262 21.5 24.2727 21.5H35.7273C37.2738 21.5 38.5 22.7103 38.5 24.17V36.6188C38.5 38.0531 36.8623 38.9953 35.5357 38.2263L30.2508 35.1626Z"
          fill="black"
          fillOpacity="0.3"
          stroke="white"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter id="filter0_d_2235_15041" x="-2.57143" y="-2.57143" width="65.1429" height="65.1429" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="10.2857" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2235_15041" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2235_15041" result="shape" />
        </filter>
      </defs>
    </svg>
  ) : type === 3 ? (
    <svg width={2.5 * size} height={2.5 * size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_2235_15042)">
        <path
          d="M30.5015 34.7301C30.1913 34.5503 29.8087 34.5503 29.4985 34.7301L24.2135 37.7937C23.1964 38.3834 22 37.6406 22 36.6188V24.17C22 23.0014 22.9872 22 24.2727 22H35.7273C37.0128 22 38 23.0014 38 24.17V36.6188C38 37.6406 36.8036 38.3834 35.7865 37.7937L30.5015 34.7301Z"
          stroke="#313135"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter id="filter0_d_2235_15042" x="-2.57143" y="-2.57143" width="65.1429" height="65.1429" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="10.2857" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2235_15042" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2235_15042" result="shape" />
        </filter>
      </defs>
    </svg>
  ) : (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="12" fill="#AEAEFF" />
      <path
        d="M6 8.09091C6 7.48842 6.48842 7 7.09091 7H16.9091C17.5116 7 18 7.48842 18 8.09091V17.0207C18 17.8799 17.053 18.4019 16.3266 17.9431L12 15.2105L7.67345 17.9431C6.94705 18.4019 6 17.8799 6 17.0207V8.09091Z"
        fill="#FAFAFC"
      />
    </svg>
  );
};

export default ScrapIcon;

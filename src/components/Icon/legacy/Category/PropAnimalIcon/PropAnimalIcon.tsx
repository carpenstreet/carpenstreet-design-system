import { IPropAnimalIconProps } from './PropAnimalIcon.types.ts';

/**
 * 카테고리 컴포넌트에서 쓰이는 '소품동물' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const PropAnimalIcon = ({ size = 16 }: IPropAnimalIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 7.5H7.5V8.5H6V9.5H10V8.5H8.5V7.5H9V6.5H7V7.5Z" fill="#EEEEFF" />
      <path d="M6 5H7V6H6V5Z" fill="#EEEEFF" />
      <path d="M10 5H9V6H10V5Z" fill="#EEEEFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12C10.7614 12 13 9.76142 13 7C13 4.23858 10.7614 2 8 2C5.23858 2 3 4.23858 3 7C3 9.76142 5.23858 12 8 12ZM7 7.5H7.5V8.5H6V9.5H10V8.5H8.5V7.5H9V6.5H7V7.5ZM6 5H7V6H6V5ZM10 5H9V6H10V5Z"
        fill="#EEEEFF"
      />
      <path d="M7 7.5H7.5V8.5H6V9.5H10V8.5H8.5V7.5H9V6.5H7V7.5Z" fill="#313135" />
      <path d="M6 5H7V6H6V5Z" fill="#313135" />
      <path d="M10 5H9V6H10V5Z" fill="#313135" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.731 12.3439C12.6717 11.3501 14 9.33017 14 7C14 6.48205 13.9344 5.97943 13.811 5.5H15.5V1.43361L11.262 1.96336C10.323 1.35394 9.20283 1 8 1C6.79717 1 5.67701 1.35394 4.73799 1.96336L0.5 1.43361V5.5H2.18903C2.06563 5.97943 2 6.48205 2 7C2 9.33017 3.32831 11.3501 5.26904 12.3439L4.5 13.882V15H11.5V13.882L10.731 12.3439ZM13 7C13 9.76142 10.7614 12 8 12C5.23858 12 3 9.76142 3 7C3 4.23858 5.23858 2 8 2C10.7614 2 13 4.23858 13 7ZM9.80315 12.7243C9.23401 12.9034 8.62828 13 8 13C7.37172 13 6.76599 12.9034 6.19685 12.7243L5.55902 14H10.441L9.80315 12.7243ZM13.456 4.5H14.5V2.56639L12.3224 2.8386C12.7876 3.32173 13.1726 3.88268 13.456 4.5ZM1.5 2.56639L3.67764 2.8386C3.21238 3.32173 2.82737 3.88268 2.54404 4.5H1.5V2.56639Z"
        fill="#313135"
      />
      <path d="M3.67764 2.83861L1.5 2.56641V4.50002H2.54404C2.82737 3.8827 3.21238 3.32175 3.67764 2.83861Z" fill="white" />
      <path d="M14.5 4.50002H13.456C13.1726 3.8827 12.7876 3.32175 12.3224 2.83861L14.5 2.56641V4.50002Z" fill="white" />
      <path d="M8 13C8.62828 13 9.23401 12.9034 9.80315 12.7243L10.441 14H5.55902L6.19685 12.7243C6.76599 12.9034 7.37172 13 8 13Z" fill="white" />
    </svg>
  );
};

export default PropAnimalIcon;

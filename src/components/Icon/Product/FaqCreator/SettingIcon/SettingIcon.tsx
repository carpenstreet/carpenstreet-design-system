import { ISettingIconProps } from './SettingIcon.types';

/**
 * 판매 가이드 페이지에서 쓰이는 '세팅' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const SettingIcon = ({ size = 24 }: ISettingIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_133_3846)">
        <path
          d="M12.0002 11.7376C13.305 11.7376 14.3627 10.6798 14.3627 9.37507C14.3627 8.0703 13.305 7.01257 12.0002 7.01257C10.6954 7.01257 9.6377 8.0703 9.6377 9.37507C9.6377 10.6798 10.6954 11.7376 12.0002 11.7376Z"
          fill="white"
          stroke="#313135"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M12.0002 11.7377C12.9749 11.7377 13.9096 12.1064 14.5988 12.7628C15.288 13.4192 15.6752 14.3094 15.6752 15.2377V16.9877H8.3252V15.2377C8.3252 14.3094 8.71238 13.4192 9.40158 12.7628C10.0908 12.1064 11.0255 11.7377 12.0002 11.7377V11.7377Z"
          fill="#FF994F"
          stroke="#313135"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M17.187 0.259521L18.3206 3.30993L15.2838 4.34933M18.2916 3.58296C16.2673 2.07437 13.7677 1.34476 11.2497 1.52757C8.73174 1.71037 6.3637 2.79337 4.57854 4.57853C2.79339 6.36368 1.71041 8.73171 1.52761 11.2497C1.3448 13.7676 2.07438 16.2673 3.58297 18.2916"
          stroke="#313135"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M6.81284 23.7407L5.6792 20.6903L8.71607 19.6509M5.70825 20.4172C7.73253 21.9258 10.2322 22.6554 12.7501 22.4726C15.2681 22.2898 17.6361 21.2068 19.4213 19.4217C21.2064 17.6365 22.2894 15.2685 22.4722 12.7505C22.655 10.2326 21.9255 7.7329 20.4169 5.70862"
          stroke="#313135"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
      </g>
      <defs>
        <clipPath id="clip0_133_3846">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SettingIcon;

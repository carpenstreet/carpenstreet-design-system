import { ILicenseIconProps } from './LicenseIcon.types';

/**
 * 판매 가이드 페이지에서 쓰이는 '라이센스' 아이콘입니다.
 * @param size width와 height를 결정합니다. (width=height)
 * @constructor
 */
const LicenseIcon = ({ size = 24 }: ILicenseIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1501 23H2.17529V1H20.1753V7.75" stroke="#313135" strokeWidth="1.5" />
      <line x1="5.17529" y1="4.3125" x2="17.1753" y2="4.3125" stroke="#313135" />
      <line x1="5.17529" y1="7.3125" x2="16.1753" y2="7.3125" stroke="#313135" />
      <line x1="5.17529" y1="10.3125" x2="12.1753" y2="10.3125" stroke="#313135" />
      <line x1="5.17529" y1="13.3125" x2="11.1753" y2="13.3125" stroke="#313135" />
      <line x1="5.17529" y1="16.3125" x2="11.1753" y2="16.3125" stroke="#313135" />
      <path d="M20.4107 16.0686V22.1875L17.9064 20.3252L15.4053 22.1875V16.0686" fill="#FF994F" stroke="#313135" strokeWidth="1.5" strokeMiterlimit="10" />
      <path
        d="M17.9077 17.2656C20.071 17.2656 21.8247 15.5119 21.8247 13.3486C21.8247 11.1853 20.071 9.43164 17.9077 9.43164C15.7444 9.43164 13.9907 11.1853 13.9907 13.3486C13.9907 15.5119 15.7444 17.2656 17.9077 17.2656Z"
        fill="white"
        stroke="#313135"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default LicenseIcon;

import { ICompanyBuildingIndustryIconProps } from './CompanyBuildingIndustryIcon.types';

/**
 * 카테고리 컴포넌트에서 쓰이는 '회사건물산업' 아이콘입니다.
 * @param size width와 height 결정 (width = height)
 * @constructor
 */
const CompanyBuildingIndustryIcon = ({ size = 16 }: ICompanyBuildingIndustryIconProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5L5.00012 4L11.0001 4.0007L11 5.0007L5 5Z" fill="#EEEEFF" />
      <path d="M5.00012 6L5 7L11 7.0007L11.0001 6.0007L5.00012 6Z" fill="#EEEEFF" />
      <path d="M5 9L5.00012 8L11.0001 8.0007L11 9.0007L5 9Z" fill="#EEEEFF" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 14H6V11H10V14H13V2H3V14ZM5 5L5.00012 4L11.0001 4.0007L11 5.0007L5 5ZM5.00012 6L5 7L11 7.0007L11.0001 6.0007L5.00012 6ZM5 9L5.00012 8L11.0001 8.0007L11 9.0007L5 9Z"
        fill="#EEEEFF"
      />
      <path d="M5 5L5.00012 4L11.0001 4.0007L11 5.0007L5 5Z" fill="#313135" />
      <path d="M5.00012 6L5 7L11 7.0007L11.0001 6.0007L5.00012 6Z" fill="#313135" />
      <path d="M5 9L5.00012 8L11.0001 8.0007L11 9.0007L5 9Z" fill="#313135" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 14V1H14V14H15V15H9V12H7V15H1V14H2ZM10 11H6V14H3V2H13V14H10V11Z" fill="#313135" />
    </svg>
  );
};

export default CompanyBuildingIndustryIcon;

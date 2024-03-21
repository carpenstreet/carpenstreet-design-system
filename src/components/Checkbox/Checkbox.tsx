import { Checkbox as MUICheckbox } from '@mui/material';
import { CheckboxProps } from './Checkbox.types.ts';

export default function Checkbox(props: CheckboxProps) {
  const { color = 'default', ...rest } = props;
  return <MUICheckbox color={color} icon={<Icon />} checkedIcon={<CheckedIcon />} indeterminateIcon={<IndeterminateIcon />} {...rest} />;
}

/**
 * The icon to display when the component is unchecked
 * color is set to 'default'
 * @constructor
 */
function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect className={'rect-fill'} x="2" y="2" width="20" height="20" rx="4" />
      <rect className={'rect-stroke'} x="2.6" y="2.6" width="18.8" height="18.8" rx="3.4" stroke="#8E8E8E" strokeWidth="1.2" />
    </svg>
  );
}

/**
 * The icon to display when the component is checked
 * color is set to 'default'
 * @constructor
 */
function CheckedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect className={'rect-fill'} x="2" y="2" width="20" height="20" rx="4" fill="#313135" />
      <path d="M15.6368 9L10.5456 14.0912L8 11.5456" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * The icon to display when the component is indeeterminate
 * color is set to 'default'
 * @constructor
 */
function IndeterminateIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect className={'rect-fill'} x="2" y="2" width="20" height="20" rx="4" fill="#313135" />
      <path d="M7 12H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

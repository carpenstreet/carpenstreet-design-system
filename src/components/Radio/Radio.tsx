import { Radio as MUIRadio } from '@mui/material';
import { RadioProps } from './Radio.types.ts';

export default function Radio(props: RadioProps) {
  const { color = 'default', ...rest } = props;
  return <MUIRadio color={color} icon={<Icon />} checkedIcon={<CheckedIcon />} {...rest} />;
}

/**
 * The icon to display when the component is unchecked
 * color is set to 'default'
 * @constructor
 */
function Icon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={'path-fill'}
        d="M2.1073 12C2.1073 17.5228 6.58445 22 12.1073 22C17.6301 22 22.1073 17.5228 22.1073 12C22.1073 6.47715 17.6301 2 12.1073 2C6.58445 2 2.1073 6.47715 2.1073 12ZM3.6073 12C3.6073 7.30558 7.41288 3.5 12.1073 3.5C16.8017 3.5 20.6073 7.30558 20.6073 12C20.6073 16.6944 16.8017 20.5 12.1073 20.5C7.41288 20.5 3.6073 16.6944 3.6073 12Z"
        fill="#313135"
      />
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={'path-fill'}
        d="M2.1073 12C2.1073 6.47715 6.58445 2 12.1073 2C14.7595 2 17.303 3.05357 19.1784 4.92893C21.0537 6.8043 22.1073 9.34784 22.1073 12C22.1073 17.5228 17.6301 22 12.1073 22C6.58445 22 2.1073 17.5228 2.1073 12ZM3.6073 12C3.6073 16.6944 7.41288 20.5 12.1073 20.5C14.3616 20.5 16.5236 19.6045 18.1177 18.0104C19.7118 16.4163 20.6073 14.2543 20.6073 12C20.6073 7.30558 16.8017 3.5 12.1073 3.5C7.41288 3.5 3.6073 7.30558 3.6073 12Z"
        fill="#313135"
      />
      <path
        className={'path-fill'}
        d="M12.1073 7C9.34588 7 7.1073 9.23858 7.1073 12C7.1073 14.7614 9.34588 17 12.1073 17C14.8687 17 17.1073 14.7614 17.1073 12C17.1073 9.23858 14.8687 7 12.1073 7Z"
        fill="#313135"
      />
    </svg>
  );
}

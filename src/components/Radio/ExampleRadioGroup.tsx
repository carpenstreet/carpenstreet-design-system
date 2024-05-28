import { RadioProps } from './Radio.types';
import { RadioGroup as MUIRadioGroup, FormControlLabel as MUIFormControlLabel } from '@mui/material';
import Radio from './Radio';

export default function ExampleRadioGroup(props: RadioProps) {
  const { size, ...rest } = props;
  return (
    <MUIRadioGroup row name="row-radio-buttons-group">
      <MUIFormControlLabel value="female" control={<Radio size={size} {...rest} />} label="Female" />
      <MUIFormControlLabel value="male" control={<Radio size={size} {...rest} />} label="Male" />
      <MUIFormControlLabel value="other" control={<Radio size={size} {...rest} />} label="Other" />
    </MUIRadioGroup>
  );
}

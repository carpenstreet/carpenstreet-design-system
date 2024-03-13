import React from 'react';
import MuiTextField from '@mui/material/TextField';
import { InputPropsType } from '@components/Input/Input.types.ts';

function Input(props: InputPropsType) {
  return <MuiTextField {...props} />;
}

export default Input;

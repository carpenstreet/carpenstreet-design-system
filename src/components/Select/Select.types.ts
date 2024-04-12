import { TextFieldProps } from '../Textfield/TextField.types.ts';

export type SelectProps = Omit<TextFieldProps, 'variant' | 'select'>;

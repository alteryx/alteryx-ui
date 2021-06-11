import * as React from 'react';

export interface NumericInputProps {
  value?: number | string;
  decrementButtonText?: string;
  decimal?: number;
  fixedDecimal?: boolean;
  min?: number| string;
  max?: number| string;
  step?: number;
  autoComplete?: string;
  autoFocus?: boolean;
  defaultValue?: number| string;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  id?: string;
  incrementButtonText?: string;
  InputLabelProps?: {[key: string]: any};
  InputProps?: {[key: string]: any};
  inputProps?: {[key: string]: any};
  inputRef?: (...args: any) => void | {[key: string]: any};
  label?: React.ReactNode;
  multiline?: boolean;
  name?: string;
  onBlur?: (...args: any) => void;
  onChange?: (...args: any) => void;
  onFocus?: (...args: any) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number| string;
  rowsMax?: number| string;
  type?: string;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  readOnly?: boolean;
}

declare const NumericInput : React.ComponentType<NumericInputProps>;

export default NumericInput;

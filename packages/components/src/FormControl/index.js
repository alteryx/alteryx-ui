import React from 'react';
import FormControl from '@material-ui/core/FormControl';

import { dataUICMaker } from '../utils';

const StandardFormControl = props => <FormControl {...props} variant="standard" />;

export default dataUICMaker(StandardFormControl, 'StandardFormControl');
export { useFormControl } from '@material-ui/core/FormControl';

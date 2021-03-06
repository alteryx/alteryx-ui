const MFormControl = theme => ({
  fullWidth: {
    width: '100%',
    // The below is targeting the Select component because MUI does not allow access to the fullWidth
    // property in the useFormControl hook. Since the FormControl is the parent element, this makes
    // accessing child elements easier.
    '& div[data-uic="select"]': {
      width: '100%'
    }
  }
});

const MFormLabel = theme => ({
  root: {
    color: theme.palette.text.secondary,
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(13),
    lineHeight: '15px',
    userSelect: 'none',
    '&$focused': {},
    '&$error': {},
    '& + .MuiFormGroup-root': {
      marginTop: theme.spacing(1)
    }
  }
});

const MFormControlLabel = theme => ({
  root: {
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(13),
    lineHeight: '15px',
    marginLeft: -6,
    marginRight: 12,
    userSelect: 'none',
    marginBottom: 0
  },
  label: {
    fontSize: theme.typography.pxToRem(13),
    lineHeight: '15px',
    userSelect: 'none',
    marginBottom: 0,
    marginTop: -1
  },
  labelPlacementTop: {
    '& .MuiSwitch-root + $label': {
      marginTop: 3
    }
  },
  labelPlacementBottom: {
    '& .MuiSwitch-root + $label': {
      marginTop: 3
    }
  }
});

const MFormHelperText = theme => ({
  root: {
    marginLeft: 2,
    marginTop: 2,
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 'normal',
    color: theme.palette.text.secondary,
    lineHeight: '16px'
  }
});

export default theme => ({
  MuiFormControl: MFormControl(theme),
  MuiFormLabel: MFormLabel(theme),
  MuiFormControlLabel: MFormControlLabel(theme),
  MuiFormHelperText: MFormHelperText(theme)
});

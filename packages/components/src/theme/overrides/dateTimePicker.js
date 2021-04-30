const MPickersToolbar = theme => ({
  toolbar: {
    height: undefined,
    minHeight: 0,
    padding: theme.spacing(4)
  }
});

const MPickersTimePickerToolbar = () => ({
  separator: {
    marginTop: 'auto',
    marginBottom: 'auto'
  }
});

const MPickerDTToolbar = theme => ({
  separator: {
    margin: theme.spacing(0, 1, 1.75, 0.5)
  }
});

const MPickersClockNumber = () => ({
  clockNumber: {
    height: '30px'
  }
});

const MPickersClockPointer = theme => ({
  thumb: {
    backgroundColor: theme.palette.primary.main
  }
});

const MPickerDTTabs = theme => ({
  tabs: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
    backgroundColor: theme.palette.background.paper
  }
})

const MPickersDay = theme => ({
  current: {
    border: `1px solid ${theme.palette.blueGrey[200]}`,
    color: theme.palette.text.primary
  },
  day: {
    borderRadius: '50%',
    '&:hover': {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.action.hover
    }
  },
  daySelected: {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.action.selected,
      color: theme.palette.text.primary
    },
    '&:focus': {
      backgroundColor: theme.palette.action.selected,
      color: theme.palette.text.primary
    }
  }
});

export default theme => ({
  MuiPickersToolbar: MPickersToolbar(theme),
  MuiPickersTimePickerToolbar: MPickersTimePickerToolbar(),
  MuiPickerDTToolbar: MPickerDTToolbar(theme),
  MuiPickersClockNumber: MPickersClockNumber(),
  MuiPickersClockPointer: MPickersClockPointer(theme),
  MuiPickerDTTabs: MPickerDTTabs(theme),
  MuiPickersDay: MPickersDay(theme)
});

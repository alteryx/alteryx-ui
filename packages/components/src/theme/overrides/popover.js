import ayxColor from '../ayx-colors';

const MPopover = ({ palette, zDepth, breakpoints }) => ({
  paper: {
    borderRadius: 3,
    border: 'solid 1px',
    borderColor: palette.type === 'dark' ? ayxColor['border-dark'] : palette.blueGrey[200],
    margin: 0,
    [breakpoints.up('sm')]: {
      margin: 0
    },
    maxWidth: 'inherit',
    transform: 'scaleY(1) translateZ(0px) !important',
    transformOrigin: '50% 0px 0px !important',
    ...zDepth.for('popover')
  }
});

export default theme => ({
  MuiPopover: MPopover(theme)
});

const MBadge = ({ palette, typography, spacing }) => ({
  badge: {
    backgroundColor: palette.type === 'dark' ? palette.blueGrey[700] : palette.blueGrey[100],
    color: palette.type === 'dark' ? palette.text.primary : palette.text.secondary,
    fontSize: typography.pxToRem(10),
    fontWeight: typography.fontWeightBold,
    height: 16,
    lineHeight: 1.33,
    minWidth: 16,
    padding: `0px ${spacing(1.25)}px`
  },
  anchorOriginTopRightRectangle: {
    transform: 'scale(1) translate(40%, -60%)'
  },
  anchorOriginBottomRightRectangle: {
    transform: 'scale(1) translate(40%, 60%)'
  },
  anchorOriginTopLeftRectangle: {
    transform: 'scale(1) translate(-40%, -60%)'
  },
  anchorOriginBottomLeftRectangle: {
    transform: 'scale(1) translate(-40%, 60%)'
  }
});

export default theme => ({
  MuiBadge: MBadge(theme)
});

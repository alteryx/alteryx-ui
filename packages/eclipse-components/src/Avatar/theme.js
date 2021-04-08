const variantSizes = {
  xsmall: 18,
  small: 24,
  medium: 36,
  large: 48,
  xlarge: 96
};

const styles = theme => ({
  ...theme.overrides.MuiAvatar,
  xsmall: { height: variantSizes.xsmall, width: variantSizes.xsmall },
  small: { height: variantSizes.small, width: variantSizes.small },
  medium: { height: variantSizes.medium, width: variantSizes.medium },
  large: { height: variantSizes.large, width: variantSizes.large },
  xlarge: { height: variantSizes.xlarge, width: variantSizes.xlarge }
});

export default styles;

import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as MAvatar } from '@material-ui/core';
import classnames from 'classnames';

import { withStyles } from '../styles';

import styles from './theme';

const Avatar = React.forwardRef(({ size, className, ...rest }, ref) => {
  const { classes, ...finalRest } = rest;
  const { xsmall, small, medium, large, xlarge, ...baseClasses } = classes;
  const classesObject = {
    xsmall,
    small,
    medium,
    large,
    xlarge
  };
  const classSizes = classesObject[size] || medium;

  return <MAvatar classes={baseClasses} className={classnames(className, classSizes)} ref={ref} {...finalRest} />;
});

Avatar.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string
};

Avatar.defaultProps = {
  className: '',
  size: 'medium'
};

export default withStyles(styles, { name: 'MuiAvatar' })(Avatar);

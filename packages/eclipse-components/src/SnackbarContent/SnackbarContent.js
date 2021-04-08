import React from 'react';
import PropTypes from 'prop-types';
import MaterialSnackbarContent from '@material-ui/core/SnackbarContent';

import { makeStyles, fade } from '../styles';

const useStyles = makeStyles(({ palette }) => ({
  actionLeftBorder: {
    padding: 0,
    margin: 0,
    borderLeftColor: palette.type === 'dark' ? fade(palette.grey[400], 0.12) : fade(palette.blueGrey[500], 0.2), // divider override colors
    borderLeft: '1px solid',
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center'
  }
}));

const SnackbarContent = ({ action, children, ...props }) => {
  let borderedAction;
  const customClasses = useStyles();

  if (Array.isArray(action)) {
    borderedAction = action.map((a, idx) => {
      const newIdx = idx + 1;
      return (
        <span className={customClasses.actionLeftBorder} key={`snackbarContentAction-${newIdx}`}>
          {a}
        </span>
      );
    });
  } else if (typeof action !== 'undefined') {
    borderedAction = <span className={customClasses.actionLeftBorder}>{action}</span>;
  }

  return (
    <MaterialSnackbarContent action={borderedAction} {...props}>
      {children}
    </MaterialSnackbarContent>
  );
};

SnackbarContent.defaultProps = {
  action: undefined
};

SnackbarContent.propTypes = {
  action: PropTypes.node
};

export default SnackbarContent;

import React from 'react';
import PropTypes from 'prop-types';
import MaterialSnackbar from '@material-ui/core/Snackbar';

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

const Snackbar = ({ action, ...props }) => {
  const customClasses = useStyles();
  let borderedAction;

  if (Array.isArray(action)) {
    borderedAction = action.map((a, idx) => {
      const newIdx = idx + 1;
      return (
        <span className={customClasses.actionLeftBorder} key={`snackbarAction-${newIdx}`}>
          {a}
        </span>
      );
    });
  } else if (typeof action !== 'undefined' && action !== null) {
    borderedAction = <span className={customClasses.actionLeftBorder}>{action}</span>;
  }

  return <MaterialSnackbar action={borderedAction} {...props} />;
};

Snackbar.defaultProps = {
  action: null
};

Snackbar.propTypes = {
  action: PropTypes.node
};

export default Snackbar;

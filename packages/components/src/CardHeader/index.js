import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader as MCardHeader } from '@material-ui/core';

import { makeStyles } from '../styles';
import { dataUICMaker } from '../utils';

const useStyles = makeStyles(({ palette }) => {
  return {
    action: {
      marginTop: 1,
      paddingBottom: 1,
      borderBottom: `1px solid ${palette.divider}`
    }
  };
});

const CardHeader = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const { title } = props;

  const titleIsTabs = title && title.type && title.type.muiName === 'Tabs';

  return (
    <MCardHeader classes={titleIsTabs ? { action: classes.action } : undefined} {...props} ref={ref} />
  );
});

CardHeader.propTypes = {
  title: PropTypes.node
};

CardHeader.defaultProps = {
  title: null
};

export default dataUICMaker(CardHeader, 'CardHeader');
import React from 'react';
import MaterialTablePagination from '@material-ui/core/TablePagination';
import { useIntl, defineMessages } from 'react-intl';

import { useTheme } from '../styles';
import { dataUICMaker } from '../utils';

const TablePagination = React.forwardRef((props, ref) => {
  const intl = useIntl();
  const theme = useTheme();
  const messages = defineMessages({
    tablePagination: {
      id: 'tablePagination.label',
      defaultMessage: theme.props.MuiTablePagination.labelDisplayedRows
    }
  });

  // Arguments in react-intl can no longer accept a '-' after version 3. Mui's API says to use
  // -1 as the argument to denote server-side fetching and to change their translations.
  // So, in order to keep that the same, we're taking the count, turning it into a string,
  // and replacing all '-' with '_' so they can be used in react-intls select statement

  return (
    <MaterialTablePagination
      labelDisplayedRows={({ count, from, to }) =>
        intl.formatMessage(messages.tablePagination, {
          // we need to replace all instances of - in a string in a way that works in
          // all supported browsers, so using regex pattern with global flag since
          // String.prototype.replaceAll() is not yet broadly supported.
          count: count.toString().replace(new RegExp('-', 'g'), '_'),
          from,
          to
        })
      }
      ref={ref}
      {...props}
    />
  );
});

export default dataUICMaker(TablePagination, 'TablePagination');

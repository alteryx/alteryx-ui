import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Divider, makeStyles } from '../';
import { useIntl, defineMessages } from 'react-intl';

const useStyles = makeStyles(({ spacing }) => ({
  message: {
    paddingTop: spacing(2)
  }
}));

function ListBoxFooter({ checkedCount, classes, footerText, totalCount }) {
  const textClass = useStyles();
  const intl = useIntl();

  const getFooterText = () => {
    const messages = defineMessages({
      footer: {
        id: 'footer.text',
        defaultMessage: footerText
      }
    });

    const total = intl.formatNumber(totalCount);
    const selected = intl.formatNumber(checkedCount);
    const intlFormatMessage = intl.formatMessage(messages.footer, {
      checked: <b>{selected}</b>,
      total: <b>{total}</b>
    });

    const messageToProcess =
      React.isValidElement(intlFormatMessage) && Array.isArray(intlFormatMessage.props.children)
        ? intlFormatMessage.props.children
        : intlFormatMessage;

    const stringMessage = Array.isArray(messageToProcess)
      ? messageToProcess.map(child => (React.isValidElement(child) ? child.props.children : child)).join('')
      : messageToProcess;

    return stringMessage;
  };

  return (
    <div className={classes.footer}>
      <Divider light />
      <Typography className={textClass.message} variant="subtitle2">
        {getFooterText()}
      </Typography>
    </div>
  );
}

ListBoxFooter.defaultProps = {
  footerText: '{checked} of {total} Checked'
};

ListBoxFooter.propTypes = {
  checkedCount: PropTypes.number.isRequired,
  footerText: PropTypes.string,
  totalCount: PropTypes.number.isRequired
};

export default ListBoxFooter;

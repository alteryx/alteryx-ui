import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import { padMessages } from './utils';

/**
 * A react component that returns a properly configured react-intl IntlProvider component with
 * all children and can conditionally provide arrows language in addition to normal languages.
 * Its API exactly mirrors that of IntlProvider: https://github.com/yahoo/react-intl/wiki/Components#intl-provider-component
 * @param {string} locale
 * @param {Object} formats
 * @param {Object} messages
 * @param {string = 'en'} defaultLocale
 * @param {Object = {}} defaultFormats
 * @param {Object} padMessagesProps
 * @param {HTMLNode} textComponent
 */
const IntlProviderWithArrows = ({ locale, messages, children, padMessagesProps, ...intlProps }) => {
  const provideArrows = locale === 'xx' || locale === 'arrows';
  const newLocale = provideArrows ? 'en' : locale;
  const newMessages = provideArrows ? padMessages(messages, padMessagesProps) : messages;

  return (
    <IntlProvider locale={newLocale} messages={newMessages} {...intlProps}>
      <>{children}</>
    </IntlProvider>
  );
};

IntlProviderWithArrows.defaultProps = {
  locale: 'en',
  messages: {},
  padMessagesProps: {}
};

IntlProviderWithArrows.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.objectOf(PropTypes.string),
  padMessagesProps: PropTypes.shape({
    character: PropTypes.string,
    multiplier: PropTypes.number
  })
};

export default IntlProviderWithArrows;

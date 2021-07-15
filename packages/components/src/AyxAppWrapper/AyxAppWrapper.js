import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '../styles';
import IntlProviderWithArrows from '../IntlProviderWithArrows';
import { padMessages } from '../IntlProviderWithArrows/utils';
import getCoreTheme from '../theme';
import CssBaseline from '../CssBaseline';
import { en, de, es, fr, it, ja, pt, zh } from '../locale';

const fontFamilies = {
  designer: ['Segoe UI', 'San Francisco', 'Arial', 'sans-serif'],
  default: ['Lato', 'Arial', 'sans-serif'],
  ja: [
    'メイリオ',
    'Meiryo',
    'ヒラギノ角ゴ ProN',
    'Hiragino Kaku Gothic ProN',
    'ＭＳ ゴシック',
    'MS Gothic',
    'sans-serif'
  ],
  zh: ['Microsoft YaHei', 'PingFang SC', 'JhengHei UI', 'MS Gothic', 'sans-serif']
};

const AyxAppWrapper = ({
  language,
  locale,
  messages,
  disableCssBaseline,
  theme: productTheme,
  children,
  padMessagesProps,
  paletteType
}) => {
  const alteryxLanguageCode = typeof window !== 'undefined' && window.Alteryx && window.Alteryx.AlteryxLanguageCode;

  const determinedLocale = useMemo(() => {
    // priority should be locale > window detection > 'en';
    if (typeof locale !== 'undefined') {
      return locale;
    }
    if (typeof window !== 'undefined') {
      return (
        alteryxLanguageCode || // Installed Designer language (most preferred, if available)
        window.navigator.userLanguage || // for IE
        window.navigator.languages[0] || // preferred over .language
        window.navigator.language || // final fallback
        'en'
      );
    }
    return 'en';
  }, [locale, alteryxLanguageCode]);

  const trimmedDeterminedLocale =
    determinedLocale.length > 2 && determinedLocale.includes('-') ? determinedLocale.split('-')[0] : determinedLocale;

  const isDesignerCef = useMemo(() => (alteryxLanguageCode ? 'designer' : 'default'), [alteryxLanguageCode]);

  const messagesLanguage = typeof language !== 'undefined' ? language : trimmedDeterminedLocale;
  // our messages still need to work with en-US passing in, so we need to trim the region
  const trimmedMessagesLanguage =
    messagesLanguage.length > 2 && messagesLanguage.includes('-') ? messagesLanguage.split('-')[0] : messagesLanguage;

  // User provided message object, not UI-Core messages.
  const userMessages = useMemo(() => {
    const localeFallback =
      determinedLocale === 'xx' || determinedLocale === 'arrows' || determinedLocale === 'stars'
        ? 'en'
        : determinedLocale;

    return (
      messages[language] ||
      messages[trimmedMessagesLanguage] ||
      messages[localeFallback] ||
      messages[trimmedDeterminedLocale] ||
      messages.en
    );
  }, [language, messages, determinedLocale, trimmedDeterminedLocale, trimmedMessagesLanguage]);

  const fontFamily = useMemo(() => {
    // Language will win out over locale in case it is Japanese or Chinese
    if (typeof language !== 'undefined') {
      if (trimmedMessagesLanguage === 'ja') {
        return fontFamilies[trimmedMessagesLanguage].join(',');
      }
      if (trimmedMessagesLanguage === 'zh') {
        return fontFamilies[trimmedMessagesLanguage].join(',');
      }
    }
    const families =
      trimmedDeterminedLocale === 'ja' || trimmedDeterminedLocale === 'zh'
        ? fontFamilies[trimmedDeterminedLocale].join(',')
        : fontFamilies[isDesignerCef].join(',');
    return families;
  }, [language, trimmedDeterminedLocale, trimmedMessagesLanguage, isDesignerCef]);

  // UI-Core default messages for our components
  const uiCoreMessages = {
    en,
    de,
    es,
    fr,
    it,
    ja,
    pt,
    zh
  };

  const defaultTranslations =
    determinedLocale === 'xx' || determinedLocale === 'arrows' || determinedLocale === 'stars'
      ? padMessages(uiCoreMessages.en, padMessagesProps, determinedLocale === 'stars')
      : uiCoreMessages[trimmedMessagesLanguage] || en;
  // includes theme and overrides)
  const finalTheme = useMemo(() => getCoreTheme(productTheme, fontFamily, paletteType, defaultTranslations), [
    productTheme,
    fontFamily,
    paletteType,
    defaultTranslations
  ]);

  return (
    <ThemeProvider theme={finalTheme}>
      {disableCssBaseline ? null : <CssBaseline />}
      <IntlProviderWithArrows locale={determinedLocale} messages={userMessages} padMessagesProps={padMessagesProps}>
        {children}
      </IntlProviderWithArrows>
    </ThemeProvider>
  );
};

AyxAppWrapper.propTypes = {
  disableCssBaseline: PropTypes.bool,
  language: PropTypes.string,
  locale: PropTypes.string,
  messages: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  paletteType: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func])
};

AyxAppWrapper.defaultProps = {
  disableCssBaseline: false,
  language: undefined,
  locale: undefined,
  messages: {},
  paletteType: 'light',
  theme: {}
};

export default AyxAppWrapper;

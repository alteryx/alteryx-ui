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
  locale,
  messages,
  disableCssBaseline,
  theme: productTheme,
  children,
  padMessagesProps,
  paletteType
}) => {
  const alteryxLanguageCode = typeof window !== 'undefined' && window.Alteryx && window.Alteryx.AlteryxLanguageCode;

  const browserLocale = useMemo(() => {
    // priority should be locale > window detection > 'en';
    if (typeof locale !== 'undefined') {
      return locale;
    }
    if (typeof window !== 'undefined') {
      return (
        (
          alteryxLanguageCode || // Installed Designer language (most preferred, if available)
          window.navigator.userLanguage || // for IE
          window.navigator.languages[0] || // preferred over .language
          window.navigator.language
        ) // final fallback
          .split('-')[0] || 'en'
      );
    }
    return 'en';
  }, [locale, alteryxLanguageCode]);

  const isDesignerCef = useMemo(() => (alteryxLanguageCode ? 'designer' : 'default'), [alteryxLanguageCode]);

  const localMessages = useMemo(
    () =>
      messages[
        browserLocale === 'xx' || browserLocale === 'arrows' || browserLocale === 'stars' ? 'en' : browserLocale
      ],
    [messages, browserLocale]
  );

  const fontFamily = useMemo(
    () =>
      browserLocale === 'ja' || browserLocale === 'zh'
        ? fontFamilies[browserLocale].join(',')
        : fontFamilies[isDesignerCef].join(','),
    [browserLocale, isDesignerCef]
  );

  const locales = {
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
    browserLocale === 'xx' || browserLocale === 'arrows' || browserLocale === 'stars'
      ? padMessages(locales.en, padMessagesProps, browserLocale === 'stars')
      : locales[browserLocale] || en;
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
      <IntlProviderWithArrows locale={browserLocale} messages={localMessages} padMessagesProps={padMessagesProps}>
        {children}
      </IntlProviderWithArrows>
    </ThemeProvider>
  );
};

AyxAppWrapper.propTypes = {
  disableCssBaseline: PropTypes.bool,
  locale: PropTypes.string,
  messages: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)),
  paletteType: PropTypes.string,
  theme: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func])
};

AyxAppWrapper.defaultProps = {
  disableCssBaseline: false,
  locale: undefined,
  messages: {},
  paletteType: 'light',
  theme: {}
};

export default AyxAppWrapper;
